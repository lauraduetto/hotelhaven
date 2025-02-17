const sql = require("./db.js");

// constructor
const User = function(user) {
  this.email = user.email;
  this.username = user.username;
  this.password = user.password;
  this.zipcode = user.zipcode;
  this.phone = user.phone;
  this.description = user.description;
  this.category = user.category;
  this.nights = user.nights;
  this.guests = user.guests;
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

  User.findByZipAndCategory = (category, zip, result) => {
    
    const params = [];
    let query = 'SELECT * FROM user WHERE 1 = 1';
    
    if (category !== '0' && category) {
        query += ' AND category = ?';
        params.push(category);
    }

    if (zip) {
        query += ' AND zipcode = ?';
        params.push(zip);
    }

    sql.query(query, params, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("user: ", res);
      result(null, res);
    });
};

User.findById = (id, result) => {
    
    sql.query("SELECT * FROM user WHERE id=?", id, (err, res) => {
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