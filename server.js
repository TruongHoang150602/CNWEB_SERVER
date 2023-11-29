const express = require("express");
require("dotenv").config();
const cors = require("cors");
const route = require("./routes/index");
const db = require("./config/config");
const { handleError, ErrorHandler } = require("./helpers/error");

const app = express();

const port = process.env.PORT;
app.use(express.json());
app.use(cors());

db.connect();
route(app);

app.get("/error", (req, res, next) => {
  throw new ErrorHandler(500, "Internal server error");
});

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.use((err, req, res, next) => {
  handleError(err, res);
});

app.listen(port);
