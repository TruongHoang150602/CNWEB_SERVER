const userResultService = require("../services/userResultService");

exports.createNewUserResult = async (req, res, next) => {
  const { userId, testId, type } = req.params;

  try {
    const newUserResult = await userResultService.createNewUserResult(
      userId,
      testId,
      type
    );
    res.json(newUserResult);
    next();
  } catch (error) {
    next(error);
  }
};

exports.getUserResult = async (req, res) => {
  const { userId, testId, type } = req.params;
  console.log(userId, testId, type);
  try {
    const userResult = await userResultService.getUserResult(
      userId,
      testId,
      type
    );
    res.json(userResult);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
