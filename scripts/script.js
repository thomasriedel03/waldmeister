function init() {
      renderBoard();
      renderPlayerOneStones();
      renderPlayerTwoStones();
      makeDragPossible();
}

function renderBoard() {
      const grid = document.getElementById("grid");
      grid.innerHTML = "";
      for (let cellIndex = 0; cellIndex < 64; cellIndex++) {
            grid.innerHTML += /*html*/ `
                  <div id="cell-${cellIndex}" class="cell"></div>
            `;
      }
}

function renderPlayerOneStones() {
      let playerOneStonesTable = document.getElementById("player-one-stones-table");

      playerOneStonesTable.innerHTML = "";
      playerOneStonesTable.innerHTML = generatePlayerOneStonesTableHTML();

      for (let fieldIndex = 0; fieldIndex < 9; fieldIndex++) {
            document.getElementById(`playerOne_${fieldIndex}`).innerHTML = "";
            for (let stonesIndex = 0; stonesIndex < playerOneStones[fieldIndex]; stonesIndex++) {
                  document.getElementById(`playerOne_${fieldIndex}`).innerHTML += stoneMap[fieldIndex];
            }
      }
}

function renderPlayerTwoStones() {
      let playerTwoStonesTable = document.getElementById("player-two-stones-table");
      playerTwoStonesTable.innerHTML = generatePlayerTwoStonesTableHTML();
      for (let fieldIndex = 0; fieldIndex < 9; fieldIndex++) {
            document.getElementById(`playerTwo_${fieldIndex}`).innerHTML = "";
            for (let stonesIndex = 0; stonesIndex < playerOneStones[fieldIndex]; stonesIndex++) {
                  document.getElementById(`playerTwo_${fieldIndex}`).innerHTML += stoneMap[fieldIndex];
            }
      }
}

function makeDragPossible() {
      const containers = document.querySelectorAll(".draggable-container");
      const cells = document.getElementsByClassName("cell");

      let selected = null;

      containers.forEach((container) => {
            container.setAttribute("draggable", "true");

            container.addEventListener("dragstart", function (e) {
                  selected = e.currentTarget;
                  e.dataTransfer.setData("text/plain", ""); // Notwendig für das Draggen
            });
      });

      Array.from(cells).forEach((cell) => {
            cell.addEventListener("dragover", function (e) {
                  e.preventDefault(); // Ermöglicht das Ablegen
            });

            cell.addEventListener("drop", function (e) {
                  e.preventDefault();
                  if (selected) {
                        cell.appendChild(selected);
                        selected = null;
                  }
            });
      });
}
