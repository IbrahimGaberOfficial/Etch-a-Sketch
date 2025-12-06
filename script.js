let dimention = document.querySelector("#dimention");
let submitBtn = document.querySelector("#submit-btn");
let gridContainer = document.querySelector("#grid-container");

function createGrid() {
  if (dimention.value == "") dimention.value = 5;
  // remove the old grid if existed
  while (gridContainer.hasChildNodes()) {
    gridContainer.removeChild(gridContainer.firstChild);
  }

  // create new grid with the user input's dimentions
  let gridSize = dimention.value * dimention.value;

  gridContainer.style.minWidth = `${10 * dimention.value}px`;
  gridContainer.style.maxWidth = `${10 * dimention.value}px`;

  let getRandomNumber = (max = 255) => {
    return Math.floor(Math.random() * max);
  };

  while (gridSize--) {
    let gridElement = document.createElement("div");

    gridElement.classList.add("grid-element");
    gridElement.style.opacity = "0.1";
    // gridElement.style.backgroundColor = `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`;
    
    gridElement.addEventListener("mousedown", () => {
      gridElement.style.backgroundColor = "black"
      gridElement.style.opacity = `${0.1 + Number(gridElement.style.opacity) }`
    });

    gridContainer.appendChild(gridElement);
  }
}
submitBtn.addEventListener("click", (event) => {
  event.preventDefault(); // prevent page loading
  createGrid();
});

createGrid();
