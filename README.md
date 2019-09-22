# LAB - 05

## Data Modeling With NoSQL Database

### Author: Jonathon Schwamman

### Links and Resources
* [submission PR](https://github.com/Schwamman-401-advanced-javascript/lab-05/pull/1)
* [travis](https://www.travis-ci.com/Schwamman-401-advanced-javascript/lab-05)


#### Documentation
* [mongoose](https://mongoosejs.com/docs/guide.html) (Mongoose)
* [mongoDB](https://docs.mongodb.com/) (mongoDB)

### Modules
#### `categories.js`
##### Exported Values and Methods

###### `get(id) -> object`
Searches for a category in the database by its id and returns the category.

###### `create(record) -> object`
Creates a new category in the database with the record parameter.

###### `update(id, record) -> object`
Updates an existing category by id with the record parameter.

###### `delete(id) -> object`
Deletes an existing category with the id.

### Setup
npm install
start mongo server: `mongod --dbpath=/Users/path/to/data/db`

#### Running the app
* `npm start`

  
#### Tests
* How do you run tests?
* What assertions were made?
* What assertions need to be / should be made?

#### UML
Link to an image of the UML for your application and response to events
