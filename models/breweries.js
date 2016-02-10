var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var brewerySchema = new Schema({
  name: { type: String, required: true },
  description: { type: String},
  image: { type: Date},
  createdAt: { type: Date },
  updatedAt: { type: Date }
});

var Brewery = mongoose.model('Brewery', brewerySchema);

module.exports = Brewery;
