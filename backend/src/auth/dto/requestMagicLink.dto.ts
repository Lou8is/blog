import { IsEmail, IsOptional } from 'class-validator';

export class RequestMagicLinkDto {
    @IsEmail()
    email: string;
}