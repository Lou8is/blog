import { IsEmail, IsOptional } from 'class-validator';

export class CreateUserDto {
    @IsEmail()
    email: string;

    @IsOptional()
    username?: string;

    @IsOptional()
    password?: string;
}
