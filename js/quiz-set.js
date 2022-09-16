const quizez = document.querySelectorAll(".quiz");
const quizezArr = Array.from(quizez);
const thisPageNumber = quizezArr[0].getAttribute("data-quiz");
const winAnswersObj = function () {
  const firstQuiz = {
    1: 2,
    2: 1,
    3: 1,
    4: 0,
    5: 2,
    6: 1,
    7: 2,
    8: 0,
  };
  const secondQuiz = {
    1: 1,
    2: 2,
    3: 2,
    4: 1,
    5: 3,
    6: 3,
    7: 1,
    8: 2,
  };
  const thirdQuiz = {
    1: 1,
    2: 0,
    3: 2,
    4: 0,
    5: 1,
    6: 1,
    7: 2,
    8: 3,
  };
  const forthQuiz = {
    1: 3,
    2: 2,
    3: 2,
    4: 0,
    5: 0,
    6: 0,
    7: 1,
    8: 0,
  };
  const fifthQuiz = {
    1: 1,
    2: 0,
    3: 0,
    4: 3,
    5: 1,
    6: 2,
    7: 2,
    8: 3,
  };
  const sixQuiz = {
    1: 3,
    2: 0,
    3: 0,
    4: 2,
    5: 3,
    6: 1,
    7: 2,
    8: 3,
  };

  if (thisPageNumber === "1") {
    return firstQuiz;
  } else if (thisPageNumber === "2") {
    return secondQuiz;
  } else if (thisPageNumber === "3") {
    return thirdQuiz;
  } else if (thisPageNumber === "4") {
    return forthQuiz;
  } else if (thisPageNumber === "5") {
    return fifthQuiz;
  } else if (thisPageNumber === "6") {
    return sixQuiz;
  }
};

export default winAnswersObj;
