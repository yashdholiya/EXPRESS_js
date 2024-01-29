const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host : 'smtp.ethereal.email',
    port : 587,
    auth : {
        user : 'rudolph.weissnat@ethereal.email',
        pass : '4D5jWBhYhqfVSTDyxp'
    }
});

var mailOptions={
    from : "Yahs dholiya <yash11@gmail.com>",
    to : "rudolph.weissnat@ethereal.email",
    subject : "Testing email....",
    text : "HEllo this is darshan savaliya"
}

transporter.sendMail(mailOptions,(error,info)=>
{
    if (error) {
        console.log(error);
    } else {
        console.log("Email has been sent ",info.response)
    }
})