exports.converTestToUserAnswerSchema = (test) => {
  const questions = test.questions;
  const userAnswerData = questions.map((question) => ({
    question: question._id,
    options: question.options.map((option) => ({
      option: option._id,
      isSelected: false,
    })),
    answers: "",
    showAnswer: false,
  }));

  return userAnswerData;
};
