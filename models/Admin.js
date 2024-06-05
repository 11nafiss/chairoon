const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { ADMIN_ROLE } = require("../utils/OptionConstant.js");

const AdminSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    username: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      min: 5,
    },
    phoneNumber: {
      type: String,
    },
    profilePic: {
      type: String,
    },
    role: {
      type: String,
      enum: Object.values(ADMIN_ROLE),
      default: ADMIN_ROLE.ADMIN,
    },
  },
  { timestamps: true }
);

const Admin = mongoose.model("Admin", AdminSchema);
module.exports = Admin;
