// Create a 2D array of length 16x16
// Push divs of size 16px and styles them with a border of 1px solid grey in css

const gridContainer = document.querySelector(".grid-container");
const changeGridButton = document.querySelector(".set-grid");
const rainbowButton = document.querySelector(".rainbow-btn");
const clearButton = document.querySelector(".clear-btn");
const DEFAULT_ROWS = 16, DEFAULT_COLS = 16;
let rows = DEFAULT_ROWS, cols = DEFAULT_COLS;
let rainbowEffect = false;

changeGridButton.addEventListener("click", () => {
    let input = prompt("Input the dimensions for the grids (1-100)");
    console.log(input);
    if (parseInt(input) == NaN || input == null){
        alert("Please input a valid number");
        return;
    }
    rows = parseInt(input);
    cols = rows;
    removeOldGrids();
    createCells(rows, cols);
    startSketching();
});

rainbowButton.addEventListener("click", () => {
    rainbowEffect = true;
    removeOldGrids();
    createCells(rows, cols);
    startSketching();
});

clearButton.addEventListener("click", () => {
    const gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach(gridItem => {
        gridItem.style.backgroundColor = "transparent";
    })
});


function createCells(row, col)
{
    /*
    Thanks to stackoverflow for this:
    https://stackoverflow.com/questions/57550082/creating-a-16x16-grid-using-javascript
    */
    gridContainer.style.setProperty('--grid-rows', row);
    gridContainer.style.setProperty('--grid-columns', cols);
    for (let i = 0; i < (row * col); i++)
    {
        let cell = document.createElement("div");
        gridContainer.appendChild(cell).className = "grid-item";
    }
}

function startSketching()
{
    const gridItems = document.querySelectorAll(".grid-item");
    // Add event listener on each item
    if (!rainbowEffect){
        gridItems.forEach(gridItem => {
            gridItem.addEventListener('mouseover', () => {
                gridItem.style.backgroundColor = "black";
            });
        });
    }
    if (rainbowEffect){
        gridItems.forEach(gridItem => {
            let buf = new Uint8Array(3);
            crypto.getRandomValues(buf);
            gridItem.addEventListener('mouseover', ()=>{
                gridItem.style.backgroundColor = `rgb(${buf[0]}, ${buf[1]}, ${buf[2]})`;
            })
        });
    }
}

function removeOldGrids(){
    const gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach(gridItem => {
        gridItem.remove();
    })
}

createCells(rows, cols);
startSketching();