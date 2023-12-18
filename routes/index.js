// const usersRouter = require("./userRouter");
// const questionsRouter = require("./questionRoutes");
const { ErrorHandler, handleError } = require("../helpers/error");
const testsRouter = require("./testRoutes");
const userResultRouter = require("./userResultRoutes");
const social = require("./socialRouters");

function route(app) {
  app.use("/tests", testsRouter);
  app.use("/userResults", userResultRouter);
  app.use("/social", social);
}

module.exports = route;
