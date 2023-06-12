import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersSeedModule } from './users/users-seed.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

import config from 'src/config/config';

@Module({
    imports: [
        UsersSeedModule,
        ConfigModule.forRoot({
            envFilePath: ['.env.local', '.env'],
            load: [config],
            isGlobal: true
        }),
        MongooseModule.forRootAsync({
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) => ({
            uri: configService.get<string>('MONGO_URI')
            })
        }), 
    ]
})

export class SeedsModule {}
