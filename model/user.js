const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//taoj collection users = table
const Users = new Schema(
  {
    username: { type: String, unique: true, maxLength: 255 },
    name: { type: String, unique: true },
    email: String,
    password: String,
    avatar: String,
    age: { type: Number, min: 18, max: 65 },
    available: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("users", Users);
