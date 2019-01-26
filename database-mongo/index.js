let data = require('./seedData.js');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var serviceSchema = mongoose.Schema({
  type: String,
  name: String,
  location: {
    lat: Number,
    lng: Number,
  },
  contact: {
    phone: String,
    email: String,
    website: String,
  },
  insurance: Array,
  acceptingPts: Boolean,
  schedule: {
    m: String,
    tu: String,
    w: String,
    th: String,
    f: String,
    sat: String,
    sun: String,
  }
});

var Service = mongoose.model('Service', serviceSchema);

let service = new Service(data);

// service.save()
//   .catch(err => console.error(err));

// Service.deleteMany((err) => {
//   if (err) {
//     console.log(err)
//   }
// });

var selectAll = function(callback) {
  Service.find(function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

module.exports = {
  selectAll,
  Service,
}