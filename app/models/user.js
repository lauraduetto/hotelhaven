const sql = require("./db.js");

// constructor
const User = function(user) {
  this.email = user.email;
  this.username = user.username;
  this.password = user.password;
  this.zipcode = user.zipcode;
  this.phone = user.phone;
};

User.getAll = result => {
    sql.query("SELECT * FROM user", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("user: ", res);
      result(null, res);
    });
  };

User.create = (newUser, result) => {
  sql.query("INSERT INTO user SET ?", newUser, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created user: ", { id: res.insertId, ...newUser });
    result(null, { id: res.insertId, ...newUser });
  });
};

module.exports = User;