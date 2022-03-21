const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  listing_id: {
    type: String,
    required: [true, "Please enter the listing id"],
    lowercase: true,
    trim: true,
  },
  booking_id: {
    type: String,
    required: [true, "Please enter the booking id"],
  },
  booking_date: {
    type: Date,
    required: true,
  },
  booking_start: {
    type: Date,
    required: [true, "Please enter the check in date"],
  },
  booking_end: {
    type: Date,
    required: [true, "Please enter the check out date"],
  },
  username: {
    type: String,
    required: [true, "Please enter your username"],
    trim: true,
  },
});

const Booking = mongoose.model("booking", BookingSchema);
module.exports = Booking;
