const container = document.querySelector('.container');
const grid = document.createElement('div');

function makeGrid(gridSize) {
    for (let i = 0;i < gridSize; i++) {
        const grid = document.createElement('div');   
        grid.classList.add('square');
        container.appendChild(grid);
        }

}
makeGrid(256)


const squaresAll = document.querySelectorAll('.square');
squaresAll.forEach((square) => {
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'black';
    
    })
    
})

const inpt = document.createElement('input');
inpt.setAttribute('type','number');
const header = document.querySelector('h1');
header.appendChild(inpt);

const btn = document.createElement('button');
header.appendChild(btn);


