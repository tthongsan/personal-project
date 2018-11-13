const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
const exphbs = require('express-handlebars');

const SC = require('./controller/save_controller');
const UC = require('./controller/userController');
const AC = require('./controller/authController');
const CC = require('./controller/cartController');

const axios = require('axios');
const fs = require('fs')
require('dotenv').config();
const saltRounds = 10;


const app = express();



app.use(bodyParser.json());

app.use( express.static( `${__dirname}/../build` ) );

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

massive(process.env.CONNECTION_STRING).then((database) => {
    app.set('db', database);
    console.log('connected')
})

//////handlebars middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars');



////////////////////AUTH0/////////////////////////////////
app.get('/api/me', UC.getUserData);
app.post('/api/logout', AC.logout);
app.get('/auth/callback', AC.handleCallback);
app.patch('/api/me:id', UC.editUserName);



//////////////////////bcrypt////////////////////////////

app.post('/api/register', UC.createUserBcrypt);

  
app.post('/api/login', UC.adminLoginBcrypt);

app.post('/api/logout', UC.adminLogOutBcrypt);

/////////////////////PRODUCTS////////////////////////
app.get('/api/product/:brand', SC.getShoes);



//////////////////ADMIN POWERS///////////////////
app.get('/api/product', SC.getEverything);
app.post('/api/product', SC.addToInventory);
app.delete('/api/product/:id', SC.deleteItemsFromInventory);
app.put('/api/product/:id', SC.editItemsInInventory);


///////////////////CART///////////////////////////
app.get('/api/cart', (req, res) => {
    res.status(200).send(req.session.cart || [])
});

app.post('/api/cart', (req, res) => {
    let item = req.body;
    req.session.cart.push(item)
    res.status(200).json(req.session.cart)
})

app.delete('/api/cart/:id', (req, res) => {
    let {id} = req.params;
        let newCart = req.session.cart.findIndex(item => {
           return +id === item.id
        })
        if(newCart === -1){
            res.status(404).send(`Item with id ${id} does not exist`)
        }else {
            req.session.cart.splice(newCart, 1)
            res.json(req.session.cart)
        }
})


///////////////////EMAIL////////////////////
app.post('/api/email', UC.sendEmail);


///////////////////add to favs //////////////
app.post('/api/favs', UC.addToFavs);


///////////////////stripe//////////////////
app.post('/api/charge', CC.stripeCharge);





//bcrypt 
// app.use(bodyParser.json());
// app.use(session({
//   secret: "",
//   saveUninitialized: false,
//   resave: false,
// }));
// app.use(express.static(`${__dirname}/../build`));


// axios.get('https://store.nike.com/html-services/gridwallData?country=US&lang_locale=en_US&gridwallPath=mens-shoes/7puZoi3&pn=1').then(response => {
//     return fs.writeFile('./nikeMensLifeShoes.json', JSON.stringify(response.data.sections[0].items), /* { flag: 'a+' }, */ (err) => {
//         if (err){
//             console.log(err)
//             return response.data.sections[0].items
//         }
//     })
// })

//app.get('/api/nikes', SC.getAllItems);




const path = require('path')
app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
})


const PORT = 4000
app.listen(PORT, () => {
    console.log(`listening on port ${PORT} 🦍`)
})