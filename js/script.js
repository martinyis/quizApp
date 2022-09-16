//============================================================VARIABLES OF MAIN PAGE=============================================================================//

const pickContainer = document.querySelector(".pick__options");
const pickBody = document.querySelector(".pick");
const quizez = document.querySelectorAll(".quiz");

//============================================================ARRAY FROM A QUIZEZ===============================================================================//
const quizezArr = Array.from(quizez);
//============================================================FUNCTION TO CHANGE A QUIZ=============================================================================//
pickContainer.addEventListener("click", function (e) {
  const clicked = e.target;
  const number = clicked.getAttribute("data-number");
  if (clicked.classList[0] === "pick__start") {
    pickBody.style.display = "none";
  }
  const quiz = quizezArr.find(
    (quiz) => quiz.getAttribute("data-quiz") === number
  );
  const pageNum = quiz.getAttribute("data-quiz");
  window.location.href = `./quiz-${pageNum}.html`;
});
