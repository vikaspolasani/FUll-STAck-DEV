//const { USER } = require("../config/db.config.js");

const User = require("../models/user.model.js");

// Create and Save a new Customer
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Customer
  const user = new User({
    email: req.body.email,
    u_password: req.body.u_password,
    phonenumber: req.body.phonenumber,
    address:req.body.address
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
exports.findOne = (req, res) => {
  User.login(req.params.email,req.params.pwd, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found user with  ${req.params.email}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving user with  " + req.params.email
        });
      }
    } else res.send(data);
  });
};