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
        console.log('STRIPE REQ.BODY',req.body)
        stripe.charges.create({
            amount: req.body.amount,
            currency: 'usd',
            description: 'Example charge',
            source: stripeToken.id,
          }, function(err, charge){
              console.log('charge', charge)
            if(err){
                res.send({
                    success: false,
                    message: 'error'
                })
          } else {
            res.send({
                success: true,
                message: 'sucess'
            })
          }
          })
    }
}