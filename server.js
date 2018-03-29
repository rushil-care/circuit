const express = require('express');
const bodyParser = require('body-parser');


// const mongoose = require('mongoose');
//
// const {MongoClient, ObjectID} = require('mongodb');
//
//
//
// MongoClient.connect('mongodb://localhost:27017',(err , client)=>{
//     var db = client.db('Burger');
//   if(err){
//   return  console.log('unable to connect mongodb server');
//   }
//   console.log('connected to mongodb server');
// });

var {mongoose} = require('./db/mongoose');


var {Todo} = require('./models/todo');


var app= express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
  var todo = new Todo({
    text: req.body.text,
  });

  todo.save().then((doc)=>{
    res.send(doc);
  },(e)=>{
    res.status(400).send(e);
  });

});



app.get('/api/customers', (req, res) => {
  const customers = [
    {id: 1, firstName: 'John', lastName: 'Doe'},
    {id: 2, firstName: 'Brad', lastName: 'Traversy'},
    {id: 3, firstName: 'Mary', lastName: 'Swanson'},
  ];

  res.json(customers);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
