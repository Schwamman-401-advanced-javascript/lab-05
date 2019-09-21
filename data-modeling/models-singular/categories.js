'use strict';

// Where is our schema defined?
// How do we get it in here so we can run methods on it?
const Category = require('./categories-schema.js');

class Categories {

  constructor() {
  }

  async get(id) {
    // Call the appropriate mongoose method to get
    // one or more records

    // If 1, return it as a plain object
    if (id) {
      return Category.findOne({ _id: id});
    }
    // If 2, return it as an object like this:
    // { count: ##, results: [{}, {}] }   
    else {
      let results = await Category.find({});
      return { count: results.length, results: results};
    }
 
  }

  create(record) {
    // Call the appropriate mongoose method to create a new record
    let newRecord = new Category(record);
    return newRecord.save();
  }

  update(id, record) {
    // Call the appropriate mongoose method to update a record
    return Category.findByIdAndUpdate(id, record, { new: true });
  }

  delete(id) {
    // Call the appropriate mongoose method to delete a record
    return Category.findByIdAndDelete(id);
  }

}

module.exports = Categories;
