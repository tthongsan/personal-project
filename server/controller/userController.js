const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
const saltRounds = 12;

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
        
    },

    ///////////////////admin bcrypt//////////////////////////
    
createUserBcrypt: (req, res) => {
        const db = req.app.get('db');
    const username = "admin"
    const password = "pleaseworkxx"
  
  
    bcrypt.hash(password,saltRounds).then(hash => {
      console.log('hash', hash)
      db.create_user_bcrypt(['admin', hash]).then((user) => {
          console.log(user)
        req.session.user = { username };
        res.json({ 
         
        })
      }).catch(error => {
        console.log('error', error);
        res.status(500).json({ message: 'Something bad happened! '})
      });
    })
},

adminLoginBcrypt: (req, res) => {
    console.log('hihtihtihtithith',req.body)
    const db = req.app.get('db');
    const { username, password } = req.body;
    db.find_user([username]).then(users => {
      if (users.length) {
        bcrypt.compare(password, users[0].password).then(passwordsMatch => {
          if (passwordsMatch) {
            req.session.user = { 
                username: users[0].username,
                id: users[0].id
            };
            res.json({ 
                user: req.session.user,
                id: req.session.user.id
            });
          } else {
            res.status(403).json({ message: 'Wrong password' })
          }
          
        })
      } else {
        res.status(403).json({ message: "That user is not registered" })
      }
    });
},

  adminLogOutBcrypt: (req, res) => {
        req.session.destroy();
        res.status(200).send();
    },

    editUserName: (req, res) => {
      const {name} = req.body;
      const {id} = req.params;
      req.session.user.name = name;
      const db=req.app.get('db')
      db.update_name([name, id]).then(() => {
        res.status(200).send();
      })
    }


};
