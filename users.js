const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
 age: {
   type: Number,
   default: 0,
 },
  location: {
    type: String,
    default: 'United States'
  },
  vaccineStatus: {
    type: String,
    enum: ['Not vaccinated', 'First dose taken', 'Fully vaccinated', 'Booster taken'],
    default: 'Not vaccinated',
  },
  vaccineBrand: {
    type: String,
    default: null
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;