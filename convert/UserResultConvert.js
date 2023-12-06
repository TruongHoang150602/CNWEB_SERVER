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

exports.convertUserResultToOutputStandard = (data) => {
  const convertedData = {
    _id: data._id,
    userId: data.userId,
    testId: data.testId,
    answers: data.answers.map((answer) => {
      const convertedAnswer = {
        question: {
          _id: answer.question._id,
          question: answer.question.question,
          question_type: answer.question.question_type,
          topic: answer.question.topic,
          level: answer.question.level,
          explanation: answer.question.explanation,
        },
        options: answer.options.map((option) => {
          return {
            _id: option.option._id,
            option_text: option.option.option_text,
            is_correct: option.option.is_correct,
            isSelected: option.isSelected,
          };
        }),
        showAnswer: answer.showAnswer,
        _id: answer._id,
      };
      return convertedAnswer;
    }),
    score: data.score,
    isSubmitted: data.isSubmitted,
    type: data.type,
    createdAt: data.createdAt,
    updatedAt: data.updatedAt,
    __v: data.__v,
  };

  return convertedData;
};
