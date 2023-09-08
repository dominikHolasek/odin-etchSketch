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





/* const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content); */