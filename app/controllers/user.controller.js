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
        zipcode: req.body.zipcode,
        category: req.body.category,
        description: req.body.description,
        nights: req.body.nights,
        guests: req.body.guests
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
exports.findByZipAndCategory = (req, res) => {
    User.findByZipAndCategory(req.query.category, req.query.zipcode, (err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving users."
          });
        else res.send(data);
      });
};

// Retrieve user by id from the database.
exports.findById = (req, res) => {
    User.findById(req.params.id, (err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving users."
          });
        else res.send(data);
      });
};