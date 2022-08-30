const container = document.querySelector('.container');
const grid = document.createElement('div');

for (let i = 0;i < 256; i++) {
const grid = document.createElement('div');   
grid.classList.add('square');
container.appendChild(grid);
}


const squaresAll = document.querySelectorAll('.square');
squaresAll.forEach((square) => {
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'black';
    
    })
    
})

const button = document.createElement('button');
const header = document.querySelector('h1');
header.appendChild(button);

