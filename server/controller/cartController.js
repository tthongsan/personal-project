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
    }
}