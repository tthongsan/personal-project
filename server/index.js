const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const SC = require('./controller/save_controller');
const axios = require('axios');
const fs = require('fs')
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then((database) => {
    app.set('db', database);
    console.log('connected')
})


// axios.get('https://store.nike.com/html-services/gridwallData?country=US&lang_locale=en_US&gridwallPath=mens-shoes/7puZoi3&pn=1').then(response => {
//     return fs.writeFile('./nikeMensLifeShoes.json', JSON.stringify(response.data.sections[0].items), /* { flag: 'a+' }, */ (err) => {
//         if (err){
//             console.log(err)
//             return response.data.sections[0].items
//         }
//     })
// })

//app.get('/api/nikes', SC.getAllItems);


const PORT = 4000
app.listen(PORT, () => {
    console.log(`listening on port ${PORT} 🦍`)
})