var express = require("express");

// Import the model to use its database functions.
var burger = require("../models/burger.js");

var router = express.Router();

// Create all our routes and set up logic within those routes where required.
// Get route for Index
router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
  burger.selectAll(function(burgerData) {
    res.render("index", {burger_data: burgerData});
  });
});

//Post route for Index
router.post("/burgers/create", function(req, res) {
  burger.create(req.body.burger_name, function(result) {
    console.log(result);
    res.redirect("/");
  });
});

// Put Route for getting back to Index
router.put("/burgers/:id", function(req, res) {
  burger.updateOne(req.params.id, function(result) {
    console.log(result);
    // the 200 status will be the "OK" for the site
    res.sendStatus(200);
  });
});

// router.deleteOne("/api/burgers/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   burger.deleteOne(condition, function(result) {
//     if (result.affectedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// Export routes for server.js to use.
module.exports = router;
