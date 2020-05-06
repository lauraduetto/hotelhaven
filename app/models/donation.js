const sql = require("./db.js");

// constructor
const Donation = function(donation) {
  this.user = donation.user;
  this.amount = donation.amount;
};

Donation.create = (newDonation, result) => {
  sql.query("INSERT INTO donation SET ?", newDonation, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created request: ", { id: res.insertId, ...newDonation });
    result(null, { id: res.insertId, ...newDonation });
  });
};