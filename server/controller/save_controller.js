module.exports = {
    getNike: (req,res) => {
        const db=req.app.get('db')

        return db.get_product_by_brand([req.params.brand]).then(shoes => {
            res.status(200).send(shoes)
        })

    }

}

// getAllItems: (req,res) => {
//     console.log('hitht in getallitems')
//     const db=req.app.get('db')
//     //console.log('dbbbbbbb', db)
//     db.get_all_products().then(shoes => {
        
//         res.status(200).send(shoes)
//     })

// }