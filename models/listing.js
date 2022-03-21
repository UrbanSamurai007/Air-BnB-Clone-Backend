const mongoose = require("mongoose");

const emailVal =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const ListingSchema = new mongoose.Schema({
  listing_id: {
    type: String,
    required: [true, "Please enter a listing ID"],
    lowercase: true,
    trim: true,
  },
  listing_title: {
    type: String,
    required: [true, "Please add a title for the listing"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Please enter a description of the title"],
    trim: true,
  },
  street: {
    type: String,
    required: [true, "PLease enter the address"],
    trim: true,
  },
  city: {
    type: String,
    required: [true, "Please enter the city the listing is located in"],
    trim: true,
  },
  postal_code: {
    type: String,
    required: [true, "Please enter the postal Code"],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, "Please enter the price of the listing"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please enter the email address of the lister"],
    //        validate: function(value) {
    //            return emailVal.test(value);
    //        }
  },
  username: {
    type: String,
    required: [true, "Please enter the lister's username"],
    trim: true,
  },
});

const Listing = mongoose.model("listing", ListingSchema);
module.exports = Listing;
