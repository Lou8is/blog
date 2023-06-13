import { Injectable, Logger } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class EmailService {
    constructor(private readonly mailerService: MailerService) {}

    public sendRawMail(to: string, from: string, subject: string, text: string, html: string): void {
        this.mailerService
            .sendMail({
            to: to, // list of receivers
            from: from, // sender address
            subject: subject, // Subject line
            text: text, // plaintext body
            html: html, // HTML body content
            })
            .then(() => {})
            .catch((error) => {Logger.log(error)});
    }
}
