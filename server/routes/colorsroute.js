var router = require('express').Router();
var pg = require('pg');
var config = require('../config/dbconfig');

var pool = new pg.Pool({
  database: config.database
});
//get
router.get('/', function(req, res) {
  console.log("got to the GET");
  pool.connect()
    .then(function(client) {
      // make query
      client.query(
        'SELECT color FROM colors;')
        .then(function(result) {
          client.release();
          res.send(result.rows);
        })
        .catch(function(err) {
          // error
          client.release();
          console.log('error on SELECT', err);
          res.sendStatus(500);
        });
    });
});
//POST
router.post('/', function(req, res) {
  console.log('POST begin');
  var newColor = req.body;
  // store in DB
  pool.connect()
    .then(function(client) {
      // make query
      client.query(
        'INSERT INTO colors (color) VALUES ($1)',
        [newColor.addColor])
        .then(function(result) {
          client.release();
          res.sendStatus(201);
        })
        .catch(function(err) {
          // error
          client.release();
          console.log('error on INSERT', err);
          res.sendStatus(500);
        });
    });
});


module.exports = router;
