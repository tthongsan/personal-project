const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
const SC = require('./controller/save_controller');
const UC = require('./controller/userController');
const AC = require('./controller/authController');
const CC = require('./controller/cartController');
const axios = require('axios');
const fs = require('fs')
require('dotenv').config();
var bcrypt = require('bcrypt');
const saltRounds = 10;


const app = express();
app.use(bodyParser.json());

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

massive(process.env.CONNECTION_STRING).then((database) => {
    app.set('db', database);
    console.log('connected')
})



////////////////////AUTH0/////////////////////////////////
app.get('/api/me', UC.getUserData);
app.post('/api/logout', AC.logout);
app.get('/auth/callback', AC.handleCallback);


app.use( express.static( `${__dirname}/../build` ) );


/////////////////////PRODUCTS////////////////////////
app.get('/api/product/:brand', SC.getShoes);



//////////////////ADMIN POWERS///////////////////
app.get('/api/product', SC.getEverything);
app.post('/api/product', SC.addToInventory);
app.delete('/api/product/:id', SC.deleteItemsFromInventory);
app.put('/api/product/:id', SC.editItemsInInventory);


///////////////////CART///////////////////////////
app.get('/api/cart', CC.getCartItems);


///////////////////EMAIL////////////////////
app.post('/api/email', UC.sendEmail);

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