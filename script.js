const container = document.querySelector('.container');
const gridItem = document.createElement('div');

container.style.display = 'grid';
container.style.gridTemplateColumns = 'repeat(16, 30px)';
container.style.gridTemplateRows = 'repeat(16, 30px)';
container.style.width = '500px';
container.style.height = '500px';

function makeGrid(gridSize) {
    for (let i = 0;i < gridSize; i++) {
        const gridItem = document.createElement('div');   
        gridItem.classList.add('square');
        container.appendChild(gridItem);
        }

}
makeGrid(256)


const squaresAll = document.querySelectorAll('.square');
function colorOnHover () {
    squaresAll.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black';
        
        })
        
    })

}
colorOnHover();


const inpt = document.createElement('input');
inpt.setAttribute('type','number');
const header = document.querySelector('h1');
header.appendChild(inpt);

const btn = document.createElement('button');
btn.style.width =  '80px';
btn.style.height = '30px';
btn.textContent = 'Apply';
header.appendChild(btn);

btn.addEventListener('click', () => {
    for (let i = 0;i < squaresAll.length; i++) {
        squaresAll[i].remove();
    }
    makeGrid(inpt.value*inpt.value);
    container.style.display = 'grid';
    container.style.gridTemplateColumns = `repeat(${inpt.value}, auto)`;
    container.style.gridTemplateRows = `repeat(${inpt.value}, auto)`;
    container.style.width = '500px';
    container.style.height = '500px';
})

