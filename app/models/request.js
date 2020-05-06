const sql = require("./db.js");

// constructor
const Request = function(request) {
  this.description = request.description;
  this.user = request.user;
  this.category = request.category;
  this.zipcode = request.zipcode;
  this.nights = request.nights;
};

Request.create = (newRequest, result) => {
  sql.query("INSERT INTO request SET ?", newRequest, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created request: ", { id: res.insertId, ...newRequest });
    result(null, { id: res.insertId, ...newRequest });
  });
};

Request.findByZip = (zipcode, result) => {
    sql.query(`SELECT * FROM request WHERE zipcode = ${zipcode}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found request: ", res[0]);
        result(null, res[0]);
        return;
      }
  
      // not found Customer with the id
      result({ kind: "not_found" }, null);
    });
};

Request.getAll = (result) => {
    sql.query("SELECT * FROM request", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("requests: ", res);
      result(null, res);
    });
};

module.exports = Request;