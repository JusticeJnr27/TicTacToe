const selectBox = document.querySelector(".select-box");
const selectBtnX = selectBox.querySelector(".options .playerX");
const selectBtnO = selectBox.querySelector(".options .playerO");
const playBoard = document.querySelector(".play-board");
const players = document.querySelector(".players");
const allBox = document.querySelectorAll("section span");
const resultBox = document.querySelector(".result-box");
const wonText = resultBox.querySelector(".won-text");
const replayBtn = resultBox.querySelector("button");

window.onload = () => {
  for (let i = 0; i < allBox.length; i++) {
    allBox[i].setAttribute("onclick", "clickedBox(this)");
  }
};

selectBtnX.onclick = () => {
  selectBox.classList.add("hide");
  playBoard.classList.add("show");
};

selectBtnO.onclick = () => {
  selectBox.classList.add("hide");
  playBoard.classList.add("show");
  players.setAttribute("class", "players active player");
};

let playerXIcon = "fas fa-times";
let playerOIcon = "far fa-circle";
let currentPlayer = "X";

function clickedBox(element) {
  if (!element.getAttribute("id")) {
    element.innerHTML = `<i class="${currentPlayer === "X" ? playerXIcon : playerOIcon}"></i>`;
    element.setAttribute("id", currentPlayer);
    selectWinner();
    element.style.pointerEvents = "none";
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    players.classList.toggle("active");
  }
}

function getIdVal(classname) {
  return document.querySelector(".box" + classname).id;
}

function checkIdSign(val1, val2, val3, sign) {
  if (getIdVal(val1) === sign && getIdVal(val2) === sign && getIdVal(val3) === sign) {
    return true;
  }
}

function selectWinner() {
  if (
    checkIdSign(1, 2, 3, currentPlayer) ||
    checkIdSign(4, 5, 6, currentPlayer) ||
    checkIdSign(7, 8, 9, currentPlayer) ||
    checkIdSign(1, 4, 7, currentPlayer) ||
    checkIdSign(2, 5, 8, currentPlayer) ||
    checkIdSign(3, 6, 9, currentPlayer) ||
    checkIdSign(1, 5, 9, currentPlayer) ||
    checkIdSign(3, 5, 7, currentPlayer)
  ) {
    setTimeout(() => {
      resultBox.classList.add("show");
      playBoard.classList.remove("show");
    }, 700);
    wonText.innerHTML = `Player <p>${currentPlayer}</p> won the game!`;
  } else if (
    getIdVal(1) !== "" &&
    getIdVal(2) !== "" &&
    getIdVal(3) !== "" &&
    getIdVal(4) !== "" &&
    getIdVal(5) !== "" &&
    getIdVal(6) !== "" &&
    getIdVal(7) !== "" &&
    getIdVal(8) !== "" &&
    getIdVal(9) !== ""
  ) {
    setTimeout(() => {
      resultBox.classList.add("show");
      playBoard.classList.remove("show");
    }, 700);
    wonText.textContent = "Match has been drawn!";
  }
}

replayBtn.onclick = () => {
  window.location.reload();
};
