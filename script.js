let dimention = document.querySelector("#dimention");
let submitBtn = document.querySelector("#submit-btn");
let gridContainer = document.querySelector("#grid-container");

submitBtn.addEventListener("click", (event) => {
  event.preventDefault(); // prevent page loading

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
    gridContainer.appendChild(gridElement);
  }
});
