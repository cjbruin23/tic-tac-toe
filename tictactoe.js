var currentPlayer = "X";
var nextPlayer = "O";

var playerXSelections = new Array();
var player0Selections = new Array();

const winningCombinations = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [1,4,7],
  [2,5,8],
  [3,6,9],
  [1,5,9],
  [3,5,7]
]

handleClick = function(event) {
  var cell = event.target;

  if (cell.innerHTML != "") {
    console.log("Cheater!");
  }

  cell.innerHTML = currentPlayer;

  if(currentPlayer === "X") {
    playerSelections = playerXSelections;
    nextPlayer = "O";
  } else {
    playerSelections = player0Selections;
    nextPlayer = "X";
  }

  playerSelections.push(parseInt(cell.id));

  if(checkWinner(playerSelections)) {
    alert("Player " + currentPlayer + " wins!");
    resetGame();
  }

  if(checkDraw()) {
    alert("Draw!");
    resetGame();
  }
  //Swap players
  currentPlayer = nextPlayer;
}

function checkWinner(playerSelected) {
  for (let i = 0; i < winningCombinations.length; i++) {
    matches = 0;
    for (let j = 0; j < playerSelected.length; j++) {
      if (winningCombinations[i].includes(playerSelected[j])) {
        // console.log(winningCombinations[i]);
        // console.log(playerSelected[j])
        matches ++;

      } else {
        break;
      }

    }
    if (matches === 3) {
      return true;
    }
  }
    return false;
  }

function checkDraw() {
  return player0Selections.length + playerXSelections.length >= cells.length;
}

function resetGame() {
  playerXSelections = new Array();
  player0Selections = new Array();
  for(let i = 0; i < cells.length; i++) {
    cells[i].innerHTML = "";
  }
}

var cells = document.querySelectorAll("td");

for(var i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', handleClick);
}
