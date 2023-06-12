import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
    //Note : mongoose provide a default _id

    /**
     * Always required to ask email confirmation 
     */
    @Prop({ type: String, required: true })
    email: string;

    /**
     * Not required for anonymous users
     */
    @Prop({ type: String})
    username: string;

    @Prop({ type: String})
    password: string;

    /**
     * User creation date
     */
    @Prop({ type: Date, default: Date.now(), required: true })
    created_on: Date;

    /**
     * User modification date
     */
    @Prop({ type: Date, default: Date.now(), required: true })
    last_modified_on: Date;

    /**
     * Last auth date, to be verified when needed (set passwd 1st time, )
     */
    @Prop({ type: Date, default: Date(), required: true })
    last_auth_on: Date;

}

export const UserSchema = SchemaFactory.createForClass(User);