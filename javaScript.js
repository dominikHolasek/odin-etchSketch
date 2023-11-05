const board = document.querySelector('#hero');
const sizeButton = document.querySelector('#square_size');
const clearButton = document.querySelector('#clear');
const rgbColorButton = document.querySelector('#rgb_color');
const blackColorButton = document.querySelector('#black_color');


let gridSize = 32;
let divSize = 37.5;
let boardDiv = document.querySelectorAll('.xAxisDiv');
let boardDivs = Array.from(document.querySelectorAll(".xAxisDiv"));
let count = +0;
let isRGBColor = true;

function setDivGridSize(){
    if (gridSize < 8){
        gridSize = 8;
    }
    
    if (gridSize > 64){
        gridSize = 64;
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

            if (isRGBColor){
                let red = +Math.round((Math.random() * 255));
                let green = +Math.round((Math.random() * 255));
                let blue = +Math.round((Math.random() * 255));


                boardDivs[i].style.backgroundColor = `rgba(${red},${green},${blue},${(count/10)})` 
            }else{
                boardDivs[i].style.backgroundColor = "rgba(0,0,0," + (count / 10 + 0.1) + ")";
            }
            
            count++;
        })
    } 
}

function removeBoard(){
    boardDiv.forEach(element => {
        element.remove();
    });
}

function buttons(){
    sizeButton.addEventListener('click', () => {
        gridSize = +prompt('Write number from 8 to 64', '');
        count = 0;
        removeBoard();
        setDivGridSize();
        createBoard();
        setBoardDivSize();
        boadrDivMoseOver();
    });

    rgbColorButton.addEventListener('click', () => {
        isRGBColor = true;
    });

    blackColorButton.addEventListener('click', () => {
        isRGBColor = false;
    });

    clearButton.addEventListener('click', () => {
        count = 0;
        removeBoard();
        createBoard();
        setBoardDivSize();
        boadrDivMoseOver();
    })
}

function game(){
    setDivGridSize();
    createBoard();
    setBoardDivSize();
    boadrDivMoseOver();
    buttons();   
}

game();
