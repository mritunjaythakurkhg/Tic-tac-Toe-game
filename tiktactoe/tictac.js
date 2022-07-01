console.log("hello");

let player = "X";
let gameOver = false;

const changePlayer = () => {
  return player === "X" ? "0" : "X";
};

const wonOrNot = () => {
  let boxTexts = document.querySelectorAll(".boxText");
  const winPos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  winPos.forEach((pos) => {
    if (
      boxTexts[pos[0]].innerText === boxTexts[pos[1]].innerText &&
      boxTexts[pos[1]].innerText === boxTexts[pos[2]].innerText &&
      boxTexts[pos[0]].innerText !== ""
    ) {
      gameOver = true;
      document.getElementById("result").innerText = `player 
      ${boxTexts[pos[0]].innerText} has won`;
      let image = Array.from(document.getElementsByTagName("img"))[0];
      image.style.height = "80px";
    }
  });
};

let boxes = Array.from(document.getElementsByClassName("box"));
// console.log(boxes);
 
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    let chance = document.getElementById("player");
    let boxText = box.querySelector(".boxText");
    if (boxText.innerText === "" && gameOver === false) {
      // console.log(boxText.innerText);
      boxText.innerText = player;
      wonOrNot();
      player = changePlayer();
      chance.innerText = player;
    }
  });
});

let reset = document.getElementById("reset");
reset.addEventListener("click", () => {
  let boxTexts = document.querySelectorAll(".boxText");
  boxTexts.forEach((boxText) => {
    boxText.innerText = "";
  });
  player = "X";
  let chance = document.getElementById("player");
  chance.innerText = player;
  gameOver = false;
  document.getElementById("result").innerText = "running";
  let image = Array.from(document.getElementsByTagName("img"))[0];
  image.style.height = "0px";
});
