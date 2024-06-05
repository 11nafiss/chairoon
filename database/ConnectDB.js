const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const DB = process.env.DATABASE.replace("<password>", process.env.DATABASE_PASSWORD);

async function ConnectDB() {
  try {
    await mongoose.connect(DB, {
      dbName: "ChairoonDB",
    });
    console.log("db connected successfully");
  } catch (err) {
    console.log(`There is an error id DB: ${err.message}`);
    process.exit(1);
  }
}

module.exports = ConnectDB;
