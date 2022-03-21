const User = require("./models/users");
const Listing = require("./models/listing");
const Booking = require("./models/booking");

exports.resolvers = {
  Query: {
    UserLogin: async (parent, args) => {
      let user = await User.findOne({
        $and: [{ username: args.username }, { password: args.password }],
      });
      if (!user) {
        throw new Error(
          "Invalid Username or Password Entered. Please try again"
        );
      }
      return `Welcome ${user.username}. You are now logged in.`;
    },

    UserBookings: async (parent, args) => {
      if (args.username && args.type == "customer") {
        return await Booking.find({ username: args.username });
      } else if (args.type == "admin") {
        return await Booking.find({});
      } else {
        throw new Error("Invalid User - Error Occured");
      }
    },

    AdminListings: async (parent, args) => {
      if (args.username && args.type == "admin") {
        return await Listing.find({ username: args.username });
      } else {
        throw new Error("Invalid User - Error Occured");
      }
    },

    titleSearch: async (parent, args) => await Listing.find(args),

    citySearch: async (parent, args) => await Listing.find(args),

    zipSearch: async (parent, args) => await Listing.find(args),
  },

  Mutation: {
    addUser: async (parent, args) => await new User(args).save(),

    addListing: async (parent, args) => {
      if (args.type == "admin") {
        return new Listing(args).save();
      }
      throw new Error("Error Occured. Please try again");
    },

    addBooking: async (parent, args) => {
      if (args.type == "customer") {
        return new Booking(args).save();
      }
      throw new Error("Error Occured. Please try again");
    },
  },
};
