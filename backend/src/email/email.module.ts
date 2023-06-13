import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

import { EmailService } from './email.service';

@Module({
  imports: [
    MailerModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
          transport: {
            host: configService.get<string>('smtp_host'),
            port: configService.get<number>('smtp_port'),
            auth: {
              user: configService.get<string>('smtp_user'),
              pass: configService.get<string>('smtp_password')
            },
            //tls : { rejectUnauthorized: false } ONLY IN DEV IF ANTIVIRUS MESSES WITH EMAILS
          },
          template: {
            dir: __dirname + '/templates',
            adapter: new HandlebarsAdapter(),
            options: {
              strict: true,
            },
          },
      })
      
    }),
  ],
  providers: [EmailService],
  exports: [EmailService],
})
export class EmailModule {}
