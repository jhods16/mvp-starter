var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
var db = require('../database-mongo');
const api_key = require('../maps.config.js')
const googleMapsClient = require('@google/maps').createClient({
  key: api_key
})

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json());

app.get('/services', function (req, res) {
  db.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.post('/addResource', (req, res) => {
  googleMapsClient.geocode({
    address: req.body.location
  }, (err, data) => {
    if (err) {
      return console.error(err);
    } else {
      req.body.location = data.json.results[0].geometry.location;
      db.addNew(req.body, (err) => {
        if (err) {
          console.error(err);
        }
      })
    }
    console.log(data.json.results[0].geometry.location);
  })
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

