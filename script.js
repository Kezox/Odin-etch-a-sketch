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

const inpt = document.createElement('input');
inpt.setAttribute('type','number');
const header = document.querySelector('h1');
header.appendChild(inpt);

const btn = document.createElement('button');
header.appendChild(btn);


// Not working
btn.addEventListener('click', () => {
    for (let i = 0;i < inpt.value; i++) {
        container.remove()
        const containerNew = document.createElement('container');
        const gridNew = document.createElement('div');   
        gridNew.classList.add('squareNew');
        containerNew.appendChild(gridNew);
        containerNew.style.display = 'grid';
        
        }


})