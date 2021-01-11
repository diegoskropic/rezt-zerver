require('./config/config');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());
 
app.get('/', function (req, res) {
   //res.send('Hello World');
  res.json('Hello World');
});

app.get('/usuarios', function (req, res) {
  res.json('Get Users List');
});

app.get('/usuario/:id', function (req, res) {
   let uid = req.params.id;
   res.json({
      uid,
      info:'Get single User'
   });

});

app.post('/usuario', function (req, res) {
   let body = req.body;
   if(body.name === undefined){
      res.status(400).json({
         ok: false,
         msg: "name is required"
      })
   } else {
      res.json({
         info: "Create User",
         person: body
      });
   }
});

app.put('/usuario/:id', function (req, res) {
   let uid = req.params.id;
   res.json({
      uid,
      info:'Edit User'
   });
});

app.delete('/usuario', function (req, res) {
   res.json('Delete User');
});

app.listen(process.env.PORT, () => {
   console.log(`Listenin' to ${process.env.PORT} port`);
});