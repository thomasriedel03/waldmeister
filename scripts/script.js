function init() {
      renderBoard();
}

function renderBoard() {
      const grid = document.getElementById("grid");
      for (let cellIndex = 0; cellIndex < 64; cellIndex++) {
            grid.innerHTML += /*html*/ `
                  <div id="cell-${cellIndex}" class="cell"></div>
            `;
      }
}
