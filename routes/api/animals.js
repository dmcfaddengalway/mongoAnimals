const express = require('express');
const router = express.Router();

let mongoClient = require('mongodb').MongoClient;

// Get all members
router.get('/get-all', (req, res) => {

  //Connect to mongo
  // mongoClient.connect(<args>, function() {
    // if (err) {
    //   throw err;
    // }

    // logic here for connecting to a collection
    // logic here for calling method on collection
    // if (err) {
    //   throw err;
    // }

    // assign result to variable defined in view page (handlebars)
    // log results to console
    // return res.render the page, and the variable for our response
  });
// });

// Get specific member
// router.get('/:id', (req, res) => {
//
// });

// // Create Member
// router.post('/', (req, res) => {

// });

// // Update Member
// router.put('/:id', (req, res) => {

// });

// // Delete Member
// router.delete('/:id', (req, res) => {

// });

module.exports = router;
