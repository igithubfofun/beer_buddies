var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var brewerySchema = new Schema({
  name: {type: String},
  location: {type: String},
  popularBeer: {type: String},
  createdAt: { type: Date },
  updatedAt: { type: Date }
});

var Brewery = mongoose.model('Brewery', brewerySchema);
module.exports = Brewery;
