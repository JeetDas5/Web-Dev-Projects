console.log("Welcome to Tic Tae Toe");
let music = new Audio("assests/music.mp3");
let audioTurn = new Audio("assests/ting.mp3");
let gameover = new Audio("assests/gameover.mp3");
let turn = "X";
let isgameover = false;

//Function to change the turn
const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

//Function to check for a win
const checkWin = () => {
  let boxtext = document.getElementsByClassName("boxtext");
  let wins = [
    [0, 1, 2, 2, 5, 0],
    [3, 4, 5, 2.5, 15, 0],
    [6, 7, 8, 2.5, 25, 0],
    [0, 3, 6, -7.5, 15, 90],
    [1, 4, 7, 2.5, 15, 90],
    [2, 5, 8, 12.6, 15, 90],
    [0, 4, 8, 2.5, 15, 45],
    [2, 4, 6, 2.5, 15, 135],
  ];

  wins.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        boxtext[e[0]].innerText + " Won";
      isgameover = true;
      document
        .querySelector(".imgbox")
        .getElementsByTagName("img")[0].style.width = "200px";
      document.querySelector(
        ".line"
      ).style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
      document.querySelector(".line").style.width = "25vw";
      gameover.play();
    }
  });
};

//Game Logic
music.play();
let boxes = document.getElementsByClassName("box");
let i = 0;
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn = changeTurn();
      checkWin();
      i++;

      if (!isgameover && i < 9) {
        audioTurn.play();
        document.getElementsByClassName("info")[0].innerText =
          "Turn for " + turn;
      }
      if (!isgameover && i === 9) {
        audioTurn.play();
        document.getElementsByClassName("info")[0].innerText =
          "Draw"
      }
    }
  });
});

//Add event listener for music button
let sound = document.querySelector(".sound-btn");
sound.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    sound.innerText = "ON";
} else {
    music.pause();
    sound.innerText = "OFF";
  }
});

//Add event listener to reset button

let reset = document.querySelector(".reset");
reset.addEventListener("click", () => {
  let boxtext = document.querySelectorAll(".boxtext");
  Array.from(boxtext).forEach((element) => {
    element.innerText = "";
  });
  turn = "X";
  isgameover = false;
  document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width =
    "0px";
  document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
  document.querySelector(".line").style.width = "0";
});
