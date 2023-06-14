import { Controller, Get, Post, Body, Patch, Param, Delete, Logger, Req, BadRequestException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RequestMagicLinkDto } from './dto/requestMagicLink.dto';
import { User } from 'src/users/entities/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  /**
   * Used to pass an email to sent a magic link to
   * @returns OK if everything went well event if email does not exists ; NOK 
   */
  @Post('login')
  async requestMagicLink(@Body() requestMagicLinkDto: RequestMagicLinkDto) {
    Logger.log("login requested with email "+requestMagicLinkDto.email);
    return this.authService.requestMagicLink(requestMagicLinkDto.email);
  }

  @Get('login/:token')
  async loginWithMagicLink(@Param('token') token: string) {
    //TODO : in authService, validate magiclink, reply with jhwttoken if OK
    Logger.log("login with token "+token);
    const user: User | null = await this.authService.validateMagicLink(token);

    Logger.log("login user "+user);
    if(user) {
      return await this.authService.login(user);
    }

    throw new BadRequestException();
  }
}