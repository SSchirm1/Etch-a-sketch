
const gridContainer = document.getElementById("gridContainer");


//

function generateGrid(size) {
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    for (i = 0; i < size*size; i++) {
        let gridCell = document.createElement("div");
        gridCell.className = "gridCell";
        gridContainer.appendChild(gridCell);
        gridCell.style.background = "red";
        gridCell.style.border = "1px solid blue";

        gridCell.addEventListener("mouseenter", (event) => {
            console.log("Mouse entered the element");
            gridCell.style.backgroundColor = "blue";
        });
    }
}

generateGrid(16);
