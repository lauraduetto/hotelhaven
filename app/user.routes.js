module.exports = app => {
    const user = require("../app/controllers/user.controller.js");
    
    // Create a new User
    app.post("/user", user.create);

    // List Users
    app.get("/users", user.findAll);

    // Find user by username
    app.get("/user/:username")

    // find by zip and category
    app.get("/users/:category/:zipcode", user.findByZipAndCategory)

  
  };