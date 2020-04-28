const nodemailer = require('nodemailer');

module.exports = async(message) => {
    const receipts = JSON.parse(message.content.toString());
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: 'deathhacker160996',
            pass: 'hoang1609'
        }
    });
    console.time('send Mail');
    try {
        for (const receipt of receipts) {
            await transporter.sendMail({
                from: 'abc@gmail.com', // sender address
                to: receipt, // list of receivers
                subject: 'Subject of your email', // Subject line
                html: `<p>hello ${receipt}</p>`// plain text body
            })
        }
    } catch (error) {
        console.log(error)
    }
    console.timeEnd('send Mail');
}
