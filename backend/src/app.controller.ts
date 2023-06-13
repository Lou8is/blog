import { Controller, Get, Request, Post, UseGuards, Logger  } from '@nestjs/common';
import { AppService } from './app.service';
import { MagicAuthGuard } from './auth/magic-auth.guard';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private authService: AuthService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
/*
  @UseGuards(MagicAuthGuard)
  @Post('auth/login')
  async login(@Request() req: any) {
    Logger.log("login --- "+req);
    return this.authService.login(req.email);
  }
*/
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req: any) {
    return req.user;
  }
}
