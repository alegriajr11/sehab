import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailerservicesService {

    private transporter = nodemailer.createTransport({
        service: 'imap',
        host: 'imap.gmail.com',
        port: 993,
        secure: true,
        auth: {
            user: 'alegriasamirjr11@gmail.com',
            pass: 'itqhfeufmspbvckg',
        },
    });

    async sendMail(to: string, subject: string, html: string) {
        const message = {
            from: '"Sender Name" <sender@example.com>',
            to,
            subject,
            html,
        };
        try {
            await this.transporter.sendMail(message);
            console.log('Email enviado con éxito');
        } catch (err) {
            console.log('Error al enviar el correo electrónico:', err);
        }
    }

    getTransporter() {
        return this.transporter;
    }
}
