let currZomTile;
let currHumanTile;
let score = 0;
let gameOver = false;

window.onload = function () {
  setGame();
};

function setGame() {
  //create a grid for board in html
  for (var i = 0; i < 9; i++) {
    //<div id="0-8"></div>
    let tile = document.createElement("div");
    tile.id = i.toString();
    tile.addEventListener("click", selectTile);
    document.getElementById("board").appendChild(tile);
  }
  setInterval(setMole, 2000); //set zombie after 2 sec
  setInterval(setHuman, 3000);
}

function getRandomTile() {
  // math.random()--> (0,1)*9 -->(0-9) --> math.floor()--> (0,8)
  let num = Math.floor(Math.random() * 9);
  return num.toString();
}

function setMole() {
  if (gameOver) {
    return;
  }
  if (currZomTile) {
    currZomTile.innerHTML = "";
  }

  let zombie = document.createElement("img");
  zombie.src = "./zombie.png";

  let num = getRandomTile();
  //selecting random tile

  //human and zombie don't clash
  if (currHumanTile && currHumanTile.id == num) {
    return;
  }
  currZomTile = document.getElementById(num);
  //setting zombie to the selected random tile
  currZomTile.appendChild(zombie);
}

function setHuman() {
  if (gameOver) {
    return;
  }
  if (currHumanTile) {
    currHumanTile.innerHTML = "";
  }

  let human = document.createElement("img");
  human.src = "./monty-mole.png";

  let num = getRandomTile();

  if (currZomTile && currZomTile.id == num) {
    return;
  }
  currHumanTile = document.getElementById(num);
  currHumanTile.appendChild(human);
}

function selectTile() {
  if (gameOver) {
    return;
  }
  if (this == currZomTile) {
    score += 10;
    document.getElementById("score").innerText = score;
  } else if (this == currHumanTile) {
    document.getElementById("score").innerText =
      "GAME OVER: " + score.toString();
    gameOver = true;
  }
}
