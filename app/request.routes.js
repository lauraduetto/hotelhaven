module.exports = app => {
    const request = require("../app/controllers/request.controller.js");
  
    // Retrieve all Requests
    app.get("/request", request.findAll);
  
    // Retrieve requests by zipcode
    app.get("/request/:zipCode", request.findbyzip);

  };