const { gql } = require("apollo-server-express");

exports.typeDefs = gql`
  scalar Date

  type Users {
    id: ID!
    username: String!
    firstname: String!
    lastname: String!
    password: String!
    email: String!
    type: String!
  }

  type Listing {
    id: ID!
    listing_id: String!
    listing_title: String!
    description: String!
    street: String!
    city: String!
    postal_code: String!
    price: Float!
    email: String!
    username: String!
  }

  type Booking {
    id: ID!
    listing_id: String!
    booking_id: String!
    booking_date: Date!
    booking_start: Date!
    booking_end: Date!
    username: String!
  }

  type Query {
    UserLogin(username: String!, password: String!): [Users]
    UserBookings(username: String!, type: String!): [Booking]
    AdminListings(username: String!, type: String!): [Listing]
    titleSearch(listing_title: String!): [Listing]
    citySearch(city: String!): [Listing]
    zipSearch(postal_code: String!): [Listing]
  }

  type Mutation {
    addUser(
      username: String!
      firstname: String!
      lastname: String!
      password: String!
      email: String!
      type: String!
    ): Users

    addListing(
      listing_id: String!
      listing_title: String!
      description: String!
      street: String!
      city: String!
      postal_code: String!
      price: Float!
      email: String!
      username: String!
      type: String!
    ): Listing

    addBooking(
      listing_id: String!
      booking_id: String!
      booking_date: Date!
      booking_start: Date!
      booking_end: Date!
      username: String!
      type: String!
    ): Booking
  }
`;
