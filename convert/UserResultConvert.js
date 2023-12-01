exports.converTestToUserAnswerSchema = (test) => {
  const questions = test.questions;
  const userAnswerData = questions.map((question) => ({
    questionId: question._id,
    options: question.options.map((option) => ({
      option: option._id,
      isSelected: false,
    })),
    answers: "",
    showAnswer: false,
  }));

  return userAnswerData;
};
