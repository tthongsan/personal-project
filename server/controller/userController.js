const nodemailer = require('nodemailer');

module.exports = {
    getUserData: (req,res) => {
        res.status(200).json(req.session.user);
    },






    ///////////////nodemailer////////////////

    sendEmail: (req,res) => {
        console.log('email is here or not',req.body)
        const {email} = req.body;
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                   user: (process.env.X),
                   pass: (process.env.Y)
               }
           })

           const mailOptions = {
            from: process.env.X, // sender address
            to: email, // list of receivers
            subject: 'EMAIL WORKED', // Subject line
            html: '<p>LETS GO</p>'// plain text body
          }

          transporter.sendMail(mailOptions, function (err, info) {
            if(err)
              console.log(err)
            else
              console.log(info);
         });
        
    }
};
