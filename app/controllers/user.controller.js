const User = require("../models/user.js");

// Create and Save a new user
exports.create = (req, res) => {
    // Validate user
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
    }
    // Create a user
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone,
        zipcode: request.body.zipcode
    });

    // Save Customer in the database
    User.create(user, (err, data) => {
        if (err)
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the Customer."
        });
        else res.send(data);
    });
    
};

// Retrieve all users from the database.
exports.findAll = (req, res) => {
    User.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving users."
          });
        else res.send(data);
      });
};