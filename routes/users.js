var express = require('express');
var router = express.Router();


var users = [];
var counter = 0;

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send(users);
});

router.get('/:id', function(req, res, next) {
    // fetch from our global user model
    console.log(req.params);
    var id = req.params.id

    res.send(users.find(element => element.id === id));

});

/* POST users listing. */
router.post('/', function(req, res, next) {
  try {
    // SEND REQU.BODY.
    user = req.body;
    console.log(user);
    user.id = "user_" + counter++;
    users.push(user);
    //res.header('Content-Type', 'application/json');
    res.json({"id": user.id});
  } catch (e) {
    console.log(e);
    res.json({"Message": "Check JSON fields"});
  }
});

module.exports = router;
