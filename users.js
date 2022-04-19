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
  location: {
    type: String,
    default: 'United States'
  },
  vaccineStatus: {
    type: String,
    enum: ['NOT_VACCINATED', 'FIRST_DOSE', 'FULLY_VACCINATED', 'BOOSTER_TAKEN'],
    default: 'NOT_VACCINATED',
  },
  age: {
    type: Number,
    default: 0,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;