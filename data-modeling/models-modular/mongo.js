'use strict';

/** Class representing a generic mongo model. */
class Model {

  /**
   * Model Constructor
   * @param schema {object} - mongo schema
   */
  constructor(schema) {
    this.schema = schema;
  }

  /**
   * Retrieves one or more records
   * @param id {string} optional mongo record id
   * @returns {count:#,results:[{*}]} | {*}
   */
  async get(id) {
    // Call the appropriate mongoose method to get
    // one or more records

    // If 1, return it as a plain object
    if (id) {
      return this.schema.findOne({ _id: id});
    }
    // If 2, return it as an object like this:
    // { count: ##, results: [{}, {}] }   
    else {
      let results = await this.schema.find({});
      return { count: results.length, results: results};
    }
 
  }

  /**
   * Create a new record
   * @param record {object} matches the format of the schema
   * @returns {*}
   */
  create(record) {
    // Call the appropriate mongoose method to create a new record
    let newRecord = new Model(record);
    console.log(newRecord);
    return newRecord.save();
  }

  /**
   * Replaces a record in the database
   * @param id {string} Mongo Record ID
   * @param record {object} The record data to replace. ID is a required field
   * @returns {*}
   */
  update(id, record) {
    // Call the appropriate mongoose method to update a record
    return Model.findByIdAndUpdate(id, record, { new: true });
  }

  /**
   * Deletes a recod in the model
   * @param id {string} Mongo Record ID
   * @returns {*}
   */
  delete(id) {
    // Call the appropriate mongoose method to delete a record
    return Model.findByIdAndDelete(id);
  }

}

module.exports = Model;
