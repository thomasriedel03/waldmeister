function init() {
      renderBoard();
      renderPlayerOneStones();
      renderPlayerTwoStones();
      //dragAndDrop();
      //initDrag();
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

function dragAndDrop() {
      let draggedElement;

      // Event-Listener für den Start des Ziehens
      document.querySelectorAll("svg").forEach(function (svg) {
            svg.addEventListener("dragstart", function (event) {
                  draggedElement = event.target;
                  event.dataTransfer.setData("text", event.target.id);
            });

            // Optional: Event-Listener für das Ende des Ziehens
            svg.addEventListener("dragend", function (event) {
                  event.target.style.opacity = ""; // Zurücksetzen des Aussehens
            });
      });

      // Event-Listener für das Drag-over (Element wird über ein anderes gezogen)
      document.querySelectorAll(".cell").forEach(function (cell) {
            cell.addEventListener("dragover", function (event) {
                  event.preventDefault(); // Standardverhalten verhindern, um Drop zu ermöglichen
            });

            // Event-Listener für das Droppen des Elements
            cell.addEventListener("drop", function (event) {
                  event.preventDefault();
                  if (draggedElement) {
                        // Element in das neue Feld einfügen
                        event.target.appendChild(draggedElement);
                  }
            });
      });
}

function initDrag() {
      SVGs = document.querySelectorAll("svg");
      cells = document.getElementsByClassName("cell");

      let selected = null;

      // for (let i = 0; i < SVGs.length; i++) {
      //       SVGs[i].addEventListener("dragstart", function (e) {
      //             selected = e.target;
      //             e.dataTransfer.setData("text/plain", null);
      //       });
      // }

      SVGs.forEach((svg) => {
            svg.setAttribute("draggable", "true"); // Sicherstellen, dass das gesamte SVG gezogen werden kann

            svg.addEventListener("dragstart", function (e) {
                  // Verhindern, dass das Event nur auf Unterelementen ausgelöst wird

                  selected = e.currentTarget;

                  // Dummy-Div erstellen, um als Drag-Image zu fungieren
                  const dragDiv = document.createElement("div");
                  dragDiv.style.width = "0px";
                  dragDiv.style.height = "0px";
                  dragDiv.style.opacity = "0";

                  document.body.appendChild(dragDiv);
                  e.dataTransfer.setDragImage(dragDiv, 0, 0);

                  e.dataTransfer.setData("text/plain", ""); // Workaround für das Ziehen von SVG-Elementen
            });

            // Optional: Um sicherzustellen, dass Text oder andere untergeordnete Elemente nicht separat gezogen werden
            // svg.addEventListener("mousedown", function (e) {
            //       e.preventDefault(); // Verhindert die Markierung von Text beim Ziehen
            // });
      });

      Array.from(cells).forEach((cell) => {
            cell.addEventListener("dragover", function (e) {
                  e.preventDefault();
            });

            cell.addEventListener("drop", function (e) {
                  e.preventDefault();
                  if (selected) {
                        cell.appendChild(selected);
                        selected = null; // Auswahl nach dem Ablegen aufheben
                  }
            });
      });
      // for (let j = 0; j < cells.length; j++) {
      //       cells[j].addEventListener("dragover", function (e) {
      //             e.preventDefault();
      //       });
      // }
      // for (let k = 0; k < cells.length; k++) {
      //       cells[k].addEventListener("drop", function (e) {
      //             cells[k].appendChild(selected);
      //             selected = null;
      //       });
      // }
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
