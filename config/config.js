const mongoose = require("mongoose");
require("dotenv").config();

const userName = process.env.MONGO_USER;
const password = process.env.MONGO_PASS;

async function connect() {
  try {
    await mongoose.connect(
      `mongodb+srv://${userName}:${password}@cluster0.c8qrm8m.mongodb.net/?retryWrites=true&w=majority`
    );
    console.log("Connect success");
  } catch (error) {
    console.log("Error!!!");
  }
}

module.exports = { connect };
