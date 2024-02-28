let userScore = 0;
let CompScore = 0;
const msg = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const rstbtn = document.querySelector("#rst");

const resetGame = () => {
  userScore = 0;
  CompScore = 0;
  userScorePara.innerText = userScore;
  compScorePara.innerText = CompScore;
  msg.innerText="Play your turn";
  msg.style.backgroundColor="#481620";
  msg.style.color="white";
};

const generateCompChoice = () => {
  const option = ["stone", "paper", "scissors"];
  // stone , paper , scissor
  return option[Math.floor(Math.random() * 3)];
};
const drawGame = () => {
  msg.innerText = "game was draw. Play Again!";
  msg.style.backgroundColor = "#424B54";
};
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `you win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    CompScore++;
    compScorePara.innerText = CompScore;

    msg.innerText = `you lose. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};
const playGame = (userChoice) => {
  console.log("user choice =", userChoice);
  //generate computer choice
  const CompChoice = generateCompChoice();
  console.log("computer choice=", CompChoice);

  if (userChoice === CompChoice) {
    //draw game
    drawGame();
  } else {
    let userWin = true;

    if (userChoice === "stone") {
      //scissors,paper
      userWin = CompChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //scissor,stone
      userWin = CompChoice === "scissors" ? false : true;
    } else {
      //stone,paper
      userWin = CompChoice === "stone" ? false : true;
    }
    showWinner(userWin, userChoice, CompChoice);
  }
};
const choiceArr = Array.from(choices);

choiceArr.forEach((el) => {
  el.addEventListener("click", () => {
    const userChoice = el.getAttribute("id");
    playGame(userChoice);
  });
});

rstbtn.addEventListener("click", resetGame);
