module.exports = app => {
    const user = require("../app/controllers/user.controller.js");
    
    // Create a new User
    app.post("/user", user.create);

    // List Users
    app.get("/users", user.findAll);
  
  };