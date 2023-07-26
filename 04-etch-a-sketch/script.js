// Create a 2D array of length 16x16
// Push divs of size 16px and styles them with a border of 1px solid grey in css
const GRID_CONTAINER = document.querySelector(".grid-container");
let sketchingGrids = [];

for (let i = 0; i < 256; i++)
{
    sketchingGrids.push(document.createElement("div"));
    sketchingGrids[i].className = "grid-item";
}
// Fill in the grid container with grids

for (let i = 0; i < 256; i++)
{
    GRID_CONTAINER.appendChild(sketchingGrids[i]);
}