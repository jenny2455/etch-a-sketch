const container = document.querySelector('#container');
const smallGrid = document.querySelector('#small');
const largeGrid = document.querySelector('#large');


// // Make 16 x 16 grid of square divs
function makeSmall() {

    //clear all first
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    };

    //Generate divs
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            const div = document.createElement('div');
            div.setAttribute('id', 'cell');
            div.classList.add('small');
            div.classList.remove('large');
            container.appendChild(div);
            // console.log(container);
        }
    }
};

// // make 8x8 grid of large cells
function makeLarge() {

    //clear all first
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    };

    // Generate divs
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            const div = document.createElement('div');
            div.setAttribute('id', 'cell');
            div.classList.add('large');
            div.classList.remove('small');
            container.appendChild(div);
        }
    }
};

// Event listeners for grid selection
smallGrid.addEventListener('click', makeSmall);
largeGrid.addEventListener('click', makeLarge);


// Had to change this from #cell to div#container to create the nodelist. To be honest 
// I don't know why this works. 
const cell = document.querySelectorAll('div#container');


// Add event listeners for color selection
const colorSquare = document.querySelector('#color');
const blackSquare = document.querySelector('#black');

// when color button is clicked, run the color cell function
colorSquare.addEventListener('click', changeColorful);

// when black button is clicked, run black cell function
blackSquare.addEventListener('click', changeBlack);


// Function to make cell change to random colors on mousover
function changeColorful() {

    cell.forEach((cell) => {
        cell.addEventListener('mouseover', changeColor);
    });

    function changeColor(e) {

        // Random color generator
            let red = Math.floor(Math.random() * 255);
            let green = Math.floor(Math.random() * 255);
            let blue = Math.floor(Math.random() * 255);
            let randomColor = (`${red},${green},${blue}`);
        
        e.target.style.backgroundColor = `rgb(${randomColor})`;
    };

};

// Function to make cell change to black on mouseover
function changeBlack() {

    cell.forEach((cell) => {
        cell.addEventListener('mouseover', changeToBlack);
    });
    function changeToBlack(e) {
            e.target.style.background = "black";
    };

}

// Clear the grid
const resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click', clearGrid);

function clearGrid() {
    // This was the original #cell const that I created in the global variables but it stopped
    // working (aka it was creating an empty nodelist). So I just took that const and 
    // put it in here as a local one. And it works. 
    const oneCell = document.querySelectorAll('#cell');
    oneCell.forEach((cell) => { cell.style.background = "white" });

};