
const gridContainer = document.getElementById("gridContainer");
const slider = document.getElementById("myslider");
const sliderText = document.getElementById("sliderText");
let colorIsRandom = true;
let chosenColor = "#EA1179";

button = document.getElementById("colorButton");

button.addEventListener("click", function() {
    colorIsRandom = !colorIsRandom;
    console.log("color is random" + colorIsRandom);
    if(colorIsRandom) {
        button.innerHTML = "Rainbow mode";
    }
    else {
        button.innerHTML = "One color mode";
    }
    changeColors()
})

function changeColors() {

    console.log("changing colors");
    let gridCells = document.getElementsByClassName("gridCell");
    if (!colorIsRandom) {
        
        for(i = 0; i < gridCells.length; i++) {
            if(gridCells[i].style.background != "white") {
                gridCells[i].style.background = chosenColor;
            }

        }
    }
    else {
        for(i = 0; i < gridCells.length; i++) {
            if(gridCells[i].style.background == chosenColor) {
                gridCells[i].style.background = randomizeColors();
            }

        }
    }
}

slider.addEventListener("input", function() {
    let value = slider.value;
    generateGrid(value);
    sliderText.innerHTML = "Grid size: " + value  + " x " + value;
    console.log(value);
})


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
