const mongoose = require("mongoose");

const emailVal =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordVal = /^[a-zA-Z0-9] *$/;

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please enter a username"],
    unique: [
      true,
      "That username is already taken, please enter a unique username",
    ],
    minLength: [4, "Usernames must be at least 4 characters long"],
    trim: true,
  },
  firstname: {
    type: String,
    required: [true, "Please enter first name"],
    trim: true,
    lowercase: true,
  },
  lastname: {
    type: String,
    required: [true, "Please enter your last name"],
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "please create a password"],
    minLength: [6, "Please enter a password that is 6 or more characters"],
    // validate: function(value) {
    //     return passwordVal.test(value);
    // }
  },
  email: {
    type: String,
    required: [true, "Please enter a valid email address"],
    unique: [true, "Duplicate Email Not allowed"],
    trim: true,
    // validate: function(value) {
    //     return emailVal.test(value);
    // }
  },
  type: {
    type: String,
    required: true,
    lowercase: true,
    enum: {
      values: ["admin", "customer"],
      message: "{VALUE} account type does not exist",
    },
  },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
