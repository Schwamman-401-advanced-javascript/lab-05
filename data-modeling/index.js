'use strict';

const mongoose = require('mongoose');
// Require your model
const Categories = require('./models-singular/categories.js');

// Mongoose Server URI
const MONGOOSE_URI = 'mongodb://localhost:27017/class05';

// Connect
mongoose.connect(MONGOOSE_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

// Do some work
let categories = new Categories();

let makeCategory = async () => {
  let categoryObj = {
    name: 'Test',
    description: 'Description',
  };

  let newCategory = await categories.create(categoryObj);
  console.log('New category created:', newCategory);
  
  let allCategories = await categories.get();
  console.log('All categories:', allCategories);
};

// Disconnect
makeCategory()
  .then(() => mongoose.disconnect())
