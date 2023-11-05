const board = document.querySelector('#hero');
const sizeButton = document.querySelector('#square_size');


let gridSize = 32;
let divSize = 37.5;
let boardDiv = document.querySelectorAll('.xAxisDiv');
let boardDivs = Array.from(document.querySelectorAll(".xAxisDiv"));
let count = +0;
let isRGBColor = false;

function setDivGridSize(){
    if (gridSize < 16){
        gridSize = 16;
    }
    
    if (gridSize > 100){
        gridSize = 100;
    }
    
    divSize = 960/gridSize;
}

function createBoard(){
    for (let i = 0; i < gridSize; i++){    
        for(let x = 0; x < gridSize; x++){
            let xDiv = document.createElement('div');
            xDiv.classList.add('xAxisDiv');
            xDiv.textContent = '';
            board.appendChild(xDiv);
        }
    }
}

function setBoardDivSize(){
    boardDiv = document.querySelectorAll('.xAxisDiv');
    boardDiv.forEach(element => {
        element.style.height = divSize + "px";
        element.style.width = divSize + "px";
    });
}

function boadrDivMoseOver(){
    boardDivs = Array.from(document.querySelectorAll(".xAxisDiv"));
    console.log(boardDivs[0]);
    for(let i = 0; i < boardDivs.length; i++){
        boardDivs[i].addEventListener("mouseover", () => {
            boardDivs[i].style.backgroundColor = "rgba(0,0,0," + (count / 10) + ")";
            count++;
        })
    } 
}

function removeBoard(){
    boardDiv.forEach(element => {
        element.remove();
    });
}

function game(){
    setDivGridSize();
    createBoard();
    setBoardDivSize();
    boadrDivMoseOver();
    
    sizeButton.addEventListener('click', () => {
        gridSize = +prompt('Write number from 8 to 64', '');
        count = 0;
        removeBoard();
        setDivGridSize();
        createBoard();
        setBoardDivSize();
        boadrDivMoseOver();
    });
}

game();
