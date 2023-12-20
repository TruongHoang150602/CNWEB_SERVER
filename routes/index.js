// const usersRouter = require("./userRouter");
// const questionsRouter = require("./questionRoutes");
const { ErrorHandler, handleError } = require("../helpers/error");
const testsRouter = require("./testRoutes");
const userResultRouter = require("./userResultRoutes");
const socialRouter = require("./socialRouters");
const userRouter = require("./userRoutes");

function route(app) {
  app.use("/tests", testsRouter);
  app.use("/users", userRouter);
  app.use("/userResults", userResultRouter);
  app.use("/social", socialRouter);
}

module.exports = route;
