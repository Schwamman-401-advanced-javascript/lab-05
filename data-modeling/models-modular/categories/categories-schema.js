'use strict';

const mongoose = require('mongoose');

const categories = mongoose.Schema({
  name: {type: String, require: true},
  description: {type: String},
});

module.exports = mongoose.model('categories ', categories);
