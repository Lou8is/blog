
import { Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UsersService } from 'src/users/users.service';
import { EmailService } from 'src/email/email.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private emailService: EmailService,
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

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
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
      const magictoken = this.jwtService.sign(payload, {expiresIn: '600s'})

      this.emailService.sendRawMail(
          "me@lomr.fr",
          "noreply@lomr.fr",
          "Subject",
          magictoken,
          "<p>"+magictoken+"</p>"
        )
      return { magic: magictoken };
    }
    return {message: "Request processed"};
  }
}
