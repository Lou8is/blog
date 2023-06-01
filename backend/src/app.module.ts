import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ArticlesModule } from './articles/articles.module';

import config from './config/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.local', '.env'],
      load: [config],
      isGlobal: true
    }),
    AuthModule,
    UsersModule,
    ArticlesModule,    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
