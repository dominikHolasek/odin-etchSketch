const board = document.querySelector('#hero');

/* const gridDiv = document.createElement('div');
gridDiv.classList.add('gridDiv');
gridDiv.textContent = "Grid"; */

//board.appendChild(gridDiv);

/* let gridDiv = document.createElement('div');
gridDiv.classList.add('gridDiv');
gridDiv.textContent = "Grid";

board.appendChild(gridDiv); */
const gridSize = 16;

for (let i = 0; i < gridSize; i++){
    let gridDiv = document.createElement('div');
    gridDiv.classList.add('gridDiv');
    gridDiv.textContent = (i + 1) + '|';
    board.appendChild(gridDiv);
    
    for(let x = 1; x < gridSize; x++){
        let xDiv = document.createElement('div');
        xDiv.classList.add('xAxisDiv');
        xDiv.textContent = (x + 1) + '|';
        gridDiv.appendChild(xDiv);
    }
}





/* const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content); */