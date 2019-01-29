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
  name: String,
  type: String,
  location: {
    lat: Number,
    lng: Number,
  },
  phone: String,
  email: String,
  website: String,
  insurance: Array,
  acceptingPts: String,
  
  // schedule: {
  //   m: String,
  //   tu: String,
  //   w: String,
  //   th: String,
  //   f: String,
  //   sat: String,
  //   sun: String,
  // }
});

var Service = mongoose.model('Service', serviceSchema);

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

var addNew = function(data, callback) {
  let service = new Service(data);
  service.save()
  .then(() => {
    callback() })
  .catch(err => callback(err));
}

module.exports = {
  selectAll,
  Service,
  addNew
}