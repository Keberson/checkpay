const nodemailer = require('nodemailer');
const config = require('config');

const mailData = config.get('mail');

const transporter = nodemailer.createTransport({
    host: mailData.host,
    port: mailData.port,
    secure: mailData.secure,
    auth: {
        user: mailData.user,
        pass: mailData.pass,
    },
});


module.exports = async (to, data) => {
    return await transporter.sendMail({
        from: `"CheckPay" <${mailData.user}>`,
        to: to,
        subject: data.subject,
        text: data.text
    });
};