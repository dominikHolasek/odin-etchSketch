const board = document.querySelector('#hero');

const gridSize = 16;

for (let i = 0; i < gridSize; i++){    
    for(let x = 0; x < gridSize; x++){
        let xDiv = document.createElement('div');
        xDiv.classList.add('xAxisDiv');
        xDiv.textContent = '';
        board.appendChild(xDiv);
    }
}

const boardDivs = Array.from(document.querySelectorAll(".xAxisDiv"));  

console.log(boardDivs[0]);
for(let i = 0; i < boardDivs.length; i++){
    boardDivs[i].addEventListener("mouseover", () => {
        boardDivs[i].style.backgroundColor = "black";
    })
}

/* boardDivs.forEach((e), () => {
    e.addEventListener("mouseover", () => {
        e.style.backround = "black";
    })
}) */
