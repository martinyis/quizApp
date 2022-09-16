import winAnswersObj from "./quiz-set.js";
//============================================================VARIABLES OF VARIANTS=============================================================================//
const quiz = document.querySelector(".quiz");
const variantsBox = document.querySelector(".quiz__variants");
const allVariants = document.querySelectorAll(".quiz__variants");
const secondVariants = document.querySelector(".quiz__variants2");
//============================================================VARIABLES OF WRONG OR RIGHT=============================================================================//
const wrongAnswer = document.querySelector(".quiz__which-wrong");
const rightAnswer = document.querySelector(".quiz__which-right");
//============================================================VARIABLES OF MAIN AND QUIZ BODY=============================================================================//
const nextQuestionBtn = document.querySelector(".quiz__next");
const pickBody = document.querySelector(".pick");
const resultsBody = document.querySelector(".quiz__result");
const pointsContainer = document.querySelector(".quiz__score");
const restartBtn = document.querySelector(".quiz__restart");
const newQuizBtn = document.querySelector(".quiz__mainpage");
//============================================================OBJECT OF QUESTIONS=============================================================================//
const questions = [
  document.querySelector(".question-1"),
  document.querySelector(".question-2"),
  document.querySelector(".question-3"),
  document.querySelector(".question-4"),
  document.querySelector(".question-5"),
  document.querySelector(".question-6"),
  document.querySelector(".question-7"),
  document.querySelector(".question-8"),
];
quiz.style.display = "block";
let options = ["1", "2", "3", "4"];
let points = 0;
const boxes = document.querySelectorAll(".quiz__box");
boxes.forEach((question) => {
  question.style.display = "none";
});
const alertMsg = function (condition) {
  if (condition) {
    window.onbeforeunload = function (e) {
      return "Are you sure you want to leave page";
    };
  } else {
    window.onbeforeunload = null;
  }
};

//============================================================FUNCTION WHIHC CHECKS ON RIGHT WRONG ANSWER=============================================================================//

const start = function (nextFn, workIndex, opt) {
  const check = options[opt];
  questions[workIndex].style.display = "block";
  const nextQuestion = function () {
    questions[workIndex].style.display = "none";
    nextFn(1);
  };
  const rightWrong = function (e) {
    const clicked = e.target;
    const variant = clicked.getAttribute("data-variant");
    if (clicked.classList[0] === "quiz__variant") {
      if (variant === check) {
        clicked.style.background = "#1c9111";
        points++;
        allVariants[workIndex].removeEventListener("click", rightWrong);
        setTimeout(nextQuestion, 1000);
      } else {
        clicked.style.background = "#ff0000";
        allVariants[workIndex].removeEventListener("click", rightWrong);
        setTimeout(nextQuestion, 1000);
      }
    }
  };
  allVariants[workIndex].addEventListener("click", rightWrong);
};

//============================================================FUNCTIONS FOR DIFFERENT QUESTIONS=============================================================================//
const nextFunction = function () {
  start(thridFunction, 1, winAnswersObj()[2]);
};
const thridFunction = function () {
  start(forthFunction, 2, winAnswersObj()[3]);
};
const forthFunction = function () {
  start(fifthFunction, 3, winAnswersObj()[4]);
};
const fifthFunction = function () {
  start(sixFunction, 4, winAnswersObj()[5]);
};
const sixFunction = function () {
  start(sevensFunction, 5, winAnswersObj()[6]);
};
const sevensFunction = function () {
  start(eightsFunction, 6, winAnswersObj()[7]);
};
const eightsFunction = function () {
  start(endFunction, 7, winAnswersObj()[8]);
};
const endFunction = function () {
  alertMsg(false);
  pointsContainer.innerHTML = `${points} out of 8`;
  resultsBody.classList.remove("hidden");
  console.log(points);
};
restartBtn.addEventListener("click", function () {
  location.reload();
});
newQuizBtn.addEventListener("click", function () {
  window.location.href = "index.html";
});
start(nextFunction, 0, winAnswersObj()[1]);
//============================================================BACK TO MAIN PAGE=============================================================================//
alertMsg(true);
