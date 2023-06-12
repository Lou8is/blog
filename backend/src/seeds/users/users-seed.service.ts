import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { User, UserDocument } from 'src/users/entities/user.entity';



@Injectable()
export class UsersSeedService {

    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }

    async run() {
    
    //count users in db - all connected users are admin in this early version
        const countAdmin = await this.userModel.count();
    //si ça compte 0, ajouter l'admin en db

        if(!countAdmin) {
            const adminDto: CreateUserDto = {
                email: "me@lomr.fr",
            }
            const newAdmin = new this.userModel(adminDto);
            await newAdmin.save();
        }

    }
}