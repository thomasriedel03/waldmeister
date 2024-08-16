let SVGs;
let cells;

let playerOneStones = [
      3, // yellow_1
      3, // yellow_2
      3, // yellow_3
      3, // green_1
      3, // green_2
      3, // green_3
      3, // black_1
      3, // black_2
      3, // black_3
];

let playerTwoStones = [
      3, // yellow_1
      3, // yellow_2
      3, // yellow_3
      3, // green_1
      3, // green_2
      3, // green_3
      3, // black_1
      3, // black_2
      3, // black_3
];

let stone_0 = /*html*/ `
      <div class="draggable-container">
            <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg" draggable="true">
                  <circle r="20" cx="20" cy="20" fill="yellow" />
                  <text x="50%" y="50%" text-anchor="middle" stroke="black" stroke-width="1px" font-size="20" dy=".3em">
                        1
                  </text>
            </svg>
      </div>
`;

let stone_1 = /*html*/ `
      <div class="draggable-container">
            <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg" draggable="true">
                  <circle r="20" cx="20" cy="20" fill="yellow" />
                  <text x="50%" y="50%" text-anchor="middle" stroke="black" stroke-width="1px" font-size="20" dy=".3em">
                        2
                  </text>
            </svg>
      </div>
`;

let stone_2 = /*html*/ `
      <div class="draggable-container">
            <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg" draggable="true">
                  <circle r="20" cx="20" cy="20" fill="yellow" />
                  <text x="50%" y="50%" text-anchor="middle" stroke="black" stroke-width="1px" font-size="20" dy=".3em">
                        3
                  </text>
            </svg>
      </div>
`;

let stone_3 = /*html*/ `
      <div class="draggable-container">
            <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg" draggable="true">
                  <circle r="20" cx="20" cy="20" fill="green" />
                  <text x="50%" y="50%" text-anchor="middle" stroke="black" stroke-width="1px" font-size="20" dy=".3em">
                        1
                  </text>
            </svg>
      </div>
`;

let stone_4 = /*html*/ `
      <div class="draggable-container">
            <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg" draggable="true">
                  <circle r="20" cx="20" cy="20" fill="green" />
                  <text x="50%" y="50%" text-anchor="middle" stroke="black" stroke-width="1px" font-size="20" dy=".3em">
                        2
                  </text>
            </svg>
      </div>
`;

let stone_5 = /*html*/ `
      <div class="draggable-container">
            <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg" draggable="true">
                  <circle r="20" cx="20" cy="20" fill="green" />
                  <text x="50%" y="50%" text-anchor="middle" stroke="black" stroke-width="1px" font-size="20" dy=".3em">
                        3
                  </text>
            </svg>
      </div>
`;

let stone_6 = /*html*/ `
      <div class="draggable-container">
            <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg" draggable="true">
                  <circle r="20" cx="20" cy="20" fill="black" />
                  <text x="50%" y="50%" text-anchor="middle" fill="white" font-size="20" dy=".3em">
                        1
                  </text>
            </svg>
      </div>
`;

let stone_7 = /*html*/ `
      <div class="draggable-container">
            <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg" draggable="true">
                  <circle r="20" cx="20" cy="20" fill="black" />
                  <text x="50%" y="50%" text-anchor="middle" fill="white" font-size="20" dy=".3em">
                        2
                  </text>
            </svg>
      </div>
`;

let stone_8 = /*html*/ `
      <div class="draggable-container">
            <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg" draggable="true">
                  <circle r="20" cx="20" cy="20" fill="black" />
                  <text x="50%" y="50%" text-anchor="middle" fill="white" font-size="20" dy=".3em">
                        3
                  </text>
            </svg>
      </div>
`;

let stoneMap = {
      0: stone_0,
      1: stone_1,
      2: stone_2,
      3: stone_3,
      4: stone_4,
      5: stone_5,
      6: stone_6,
      7: stone_7,
      8: stone_8,
};
