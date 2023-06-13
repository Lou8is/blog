
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ConfigService } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { UsersModule } from '../users/users.module';
import { MagicStrategy } from './magic.strategy';
import { AuthController } from './auth.controller';
import { EmailModule } from 'src/email/email.module';

@Module({
  controllers: [AuthController],
  imports: [
    UsersModule,
    PassportModule,
    EmailModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '60d' },
      }),
      inject: [ConfigService]
    }),
  ],
  providers: [AuthService, JwtStrategy, MagicStrategy],
  exports: [AuthService],
})
export class AuthModule {}