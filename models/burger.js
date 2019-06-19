// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

var burger = {
// This will display our burgers in the database
  selectAll: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
// Adds a burger to the database
  insertOne: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
// Will update our database to true when it gets devoured
  updateOne: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
// Deletes a burger from the database
  deleteOne: function(condition, cb) {
    orm.delete("burgers", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
