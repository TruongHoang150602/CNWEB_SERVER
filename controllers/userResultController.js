const userResultService = require("../services/userResultService");

exports.saveUserResult = async (req, res) => {
  const { userId, testId, answers, score } = req.body;

  try {
    const savedUserResult = await userResultService.saveUserResult(
      userId,
      testId,
      answers,
      score
    );
    res.json(savedUserResult);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getUserResult = async (req, res) => {
  const { userId, testId } = req.params;

  try {
    const userResult = await userResultService.getUserResult(userId, testId);
    res.json(userResult);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
