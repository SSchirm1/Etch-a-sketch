
const gridContainer = document.getElementById("gridContainer");
const button = document.getElementById("squareButton");
const slider = document.getElementById("myslider");
const sliderText = document.getElementById("sliderText");
let colorIsRandom = true;



button.addEventListener("click", function() {
    let squares = prompt("enter squares");
    generateGrid(squares);

})

slider.addEventListener("input", function() {
    let value = slider.value;
    generateGrid(value);
    sliderText.innerHTML = "Grid size: " + value  + " x " + value;
    console.log(value);
})




//

function generateGrid(size) {
    resetGridPainting();
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    for (i = 0; i < size*size; i++) {
        let gridCell = document.createElement("div");
        gridCell.className = "gridCell";
        gridContainer.appendChild(gridCell);
        gridCell.style.background = "white";
        gridCell.style.border = "1px solid lightgray";

        gridCell.addEventListener("mouseenter", (event) => {
            console.log("Mouse entered the element");
            if(!colorIsRandom) {
                gridCell.style.backgroundColor = "#EA1179";
            }
            else {
                gridCell.style.background = randomizeColors();
            }
           
        });
    }
}

function resetGridPainting() {
    let gridContainer = document.getElementById("gridContainer");
    gridContainer.innerHTML = "";
}

function randomizeColors() {
    let randomRGB = [];
    for(i = 0; i < 3; i++) {
        randomColor = Math.floor(255 * Math.random());
        randomRGB.push(randomColor);
    }
    let color = "rgb(" + randomRGB[0] + "," +  randomRGB[1] + "," +  randomRGB[2] + ")";
    return color;

}




generateGrid(16);
randomizeColors();
