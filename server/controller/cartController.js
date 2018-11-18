const nodemailer = require('nodemailer');
require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPES);



module.exports = {


    getCartItems: (req,res) => {
        const db=req.app.get('db')
        return db.get_cart_items().then(item=> {
            res.status(200).send(item)
        })
    },
    addToCart: (req,res) => {
        console.log('req.bobdybdyo', req.body)
        const db=req.app.get('db')
        let {id, name, price, quantity} = req.body;
        db.add_to_cart(
            [id, name, price, quantity]
        ).then(item => {
            res.status(200).send(item)
        })
    },
    stripeCharge: (req, res) => {
        const stripeToken = req.body.body;
        console.log('STRIPE REQ.BODY----------------------------',req.body)
        stripe.charges.create({
            amount: req.body.amount,
            currency: 'usd',
            description: 'Example charge',
            source: stripeToken.id,

          }, function(err, charge){
              console.log('charge--------------------------------------', charge)
            if(err){
                res.send({
                    success: false,
                    message: 'error'
                })
          } else {
            res.send({
                success: true,
                message: 'success'
            })
          }
          }).then(() => {
              console.log("this is the bodybodyidname---++++++++++",req.body.body.card.name);
          })
    },
    sendEmail: (req,res) => {
        console.log('INSIDE NODEMAILER', req.body.body);
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                   user: (process.env.X),
                   pass: (process.env.Y)
               }
           })

           const mailOptions = {
            from: process.env.X, // sender address
            to: req.body.body.card.name, // list of receivers
            subject: 'LETS GOOOOOOOOOOOOOOOOOOOOO', // Subject line
            html: '<p>PAYMENT WORKKKKKEEDDD DUDUUDUDUDE</p>'// plain text body
          }

          transporter.sendMail(mailOptions, function (err, info) {
            if(err)
              console.log(err)
            else
              console.log(info);
         });
        
    }
}