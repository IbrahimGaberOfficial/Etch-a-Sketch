let dimention = document.querySelector("#dimention");
let submitBtn = document.querySelector("#submit-btn");
let gridContainer = document.querySelector("#grid-container");

function createGrid() {
  if (dimention.value == "") dimention.value = 16;
  // remove the old grid if existed
  while (gridContainer.hasChildNodes()) {
    gridContainer.removeChild(gridContainer.firstChild);
  }

  // create new grid with the user input's dimentions
  let gridSize = dimention.value * dimention.value;

  gridContainer.style.minWidth = `${10 * dimention.value}px`;
  gridContainer.style.maxWidth = `${10 * dimention.value}px`;

  while (gridSize--) {
    let gridElement = document.createElement("div");
    gridElement.classList.add("grid-element");

    gridElement.addEventListener(
      "mouseover",
      () => {
        gridElement.style.backgroundColor = "black";
      },
      { once: true } // this to remove the event after firing it.
    );

    gridContainer.appendChild(gridElement);
  }
}
submitBtn.addEventListener("click", (event) => {
  event.preventDefault(); // prevent page loading
  createGrid();
});

createGrid();
