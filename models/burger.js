// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

var burger = {
// This will display our burgers in the database
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
// Adds a burger to the database
  create: function(name, cb) {
    orm.create("burgers", ["burger_name", "devoured"], [name, false], cb);
  },
// Will update our database from false to true when it gets devoured
 updateOne: function(id, cb) {
   var condition = "id=" + id;
   orm.updateOne("burgers", {
     devoured: true
   }, condition, cb);
 }
// Deletes a burger from the database
  // deleteOne: function(condition, cb) {
  //   orm.delete("burgers", condition, function(res) {
  //     cb(res);
  //   });
  // }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
