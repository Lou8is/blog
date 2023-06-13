import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class MagicStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(email: string): Promise<any> {
    Logger.log("magic validate --- "+email);
    const user = await this.authService.validateUser(email);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
