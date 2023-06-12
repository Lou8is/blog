import { Module } from '@nestjs/common';
import { User, UserSchema } from 'src/users/entities/user.entity';
import { UsersSeedService } from './users-seed.service';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  
    imports: [
        MongooseModule.forFeature([
            {
                name: User.name,
                schema: UserSchema
            }
        ])
        ],
    providers: [UsersSeedService],
    exports: [UsersSeedService],
})
export class UsersSeedModule {}