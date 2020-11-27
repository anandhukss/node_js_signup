var express = require('express');
const { MongoClient } = require('mongodb');
var router = express.Router();
const mongoClient = require('mongodb').MongoClient

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/submit', (req, res, next) => {
  console.log(req.body);
  next()
  MongoClient.connect("mongodb://localhost:27017", function (err, client) {
    if (err) {
      console.log('error')
    }
    else {
      client.db('crossraods').collection("users").insertOne(req.body)
    }
  })

})

module.exports = router;
