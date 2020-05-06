const UserRequest = require("../models/request.js");

// Create and Save a new request
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
    }
    // Create a Request
    const request = new UserRequest({
        email: req.body.email,
        name: req.body.name,
        active: req.body.active
    });

    // Save Customer in the database
    UserRequest.create(customer, (err, data) => {
        if (err)
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the Customer."
        });
        else res.send(data);
    });
};

// Retrieve all Requests from the database.
exports.findAll = (req, res) => {
    UserRequest.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving requests."
          });
        else res.send(data);
      });
};

// Find Request by Zip Code
exports.findbyzip = (req, res) => {
  
};
