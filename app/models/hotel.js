const sql = require("./db.js");

// constructor
const Hotel = function(hotel) {
  this.email = hotel.email;
  this.name = hotel.name;
  this.password = hotel.password;
  this.zipcode = hotel.zipcode;
  this.phone = hotel.phone;
};

Hotel.create = (newHotel, result) => {
  sql.query("INSERT INTO hotel SET ?", newHotel, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created hotel: ", { id: res.insertId, ...newHotel });
    result(null, { id: res.insertId, ...newHotel });
  });
};