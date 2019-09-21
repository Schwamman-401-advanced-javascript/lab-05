'use strict';

const mongoose = require('mongoose');

// What fields and constraints do we want?
const products = mongoose.Schema({
  name: {type: String, require: true},
  price: {type: Number, require: true},
  quantity: {type: Number, require: true},
  inStock: {type: Boolean},
});


// Do we need to run any lifecycle hooks/middleware?

module.exports = mongoose.model('products ', products);
