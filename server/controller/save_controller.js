module.exports = {
    
    getEverything: (req,res) => {
        const db=req.app.get('db')
        return db.get_all_products().then(shoes => {
            res.status(200).send(shoes)
        })
    },
    
    
    
    getShoes: (req,res) => {
        const db=req.app.get('db')

        return db.get_product_by_brand([req.params.brand]).then(shoes => {
            res.status(200).send(shoes)
        })

    },

    addToInventory: (req, res) => {
        console.log(req.body)
        const db=req.app.get('db')
        let {brand, style, name, price, image, details } = req.body;
        db.add_to_inventory(
            [brand, style, name, price, image, details]
        ).then(item => {
            res.status(200).send(item)
        })

    },

    deleteItemsFromInventory: (req, res) => {
        console.log(req.params)
        const db=req.app.get('db')
        const {id} = req.params;
        db.delete_item_from_inventory(id).then(item => {
            res.status(200).send(item)
        })
    },

    editItemsInInventory: (req, res) => {
        const db=req.app.get('db')
        const {id} = req.params;
        const {brand, name, price, image, details} = req.body;
        db.edit_items_in_inventory([brand, name, price, image, details, id]).then(item => {
            res.status(200).send(item)
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