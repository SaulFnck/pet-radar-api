import { Injectable } from '@nestjs/common';
import nodemailer from 'nodemailer';
import 'dotenv/config'; 
import { envs } from 'src/config/envs';

@Injectable()
export class EmailService {
    private readonly transporter : nodemailer.Transporter;
    private emails: string [] = ['abrahamsinx@gmail.com'];

    constructor(){
        this.transporter = nodemailer.createTransport({
            service: envs.MAILER_SERVICE, //tipo de servicio que se esta utilizando
            auth: {
                user: envs.MAILER_USER,
                pass: envs.MAILER_TOKEN
            },
        });
    }

    async sendEmail(template:string) {
        await this.transporter.sendMail({
            to: 'abrahamsinx@gmail.com',
            subject: 'Mascota Perdida',
            html:template 
        }); 
    }
}
