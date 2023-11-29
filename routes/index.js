// const usersRouter = require("./userRouter");
// const questionsRouter = require("./questionRoutes");
const { ErrorHandler, handleError } = require("../helpers/error");
const testsRouter = require("./testRoutes");
const userResultRouter = require("./userResultRoutes");

function route(app) {
  app.use("/tests", testsRouter);
  app.use("/userResults", userResultRouter);
}

module.exports = route;
