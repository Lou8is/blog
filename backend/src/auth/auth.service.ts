
import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UsersService } from 'src/users/users.service';
import { EmailService } from 'src/email/email.service';
import { User } from 'src/users/entities/user.entity';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private emailService: EmailService,
    private configService: ConfigService,
  ) {}

  async validateUser(email: string): Promise<any> {
    const user = await this.usersService.findOneByEmail(email);
    Logger.log("validateUser --- "+user);
    if (user) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: User) {
    const payload = { username: user.email, sub: user.email };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async requestMagicLink(email:string): Promise<any> {
    const user = await this.usersService.findOneByEmail(email);
    Logger.log("validateUser --- "+user);
    if (user) {
      const { password, ...result } = user;

      const payload = { username: user.email, sub: user.email };
      const magictoken: string = this.jwtService.sign(payload, {expiresIn: '600s'})

      const content = this.configService.get<string>('front_ext_url')+"/login/"+magictoken.replace(/\./gi,'-');
      
      this.emailService.sendRawMail(
          user.email,
          "noreply@lomr.fr",
          "Login to LOMR",
          content,
          "<p>"+content+"</p>"
        )
    }
    return {message: "Request processed"};
  }

  async validateMagicLink(token: string): Promise<User | null> {

    return await this.jwtService.verifyAsync(token.replace(/\-/gi,'.'))
      .then((result) => {
        Logger.log(result);
        const user = this.usersService.findOneByEmail(result.sub);
        Logger.log(user);
        return user;
      })
      .catch((error) => {
        Logger.log(error);
        throw new UnauthorizedException();
      });
  }
}
