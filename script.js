const container = document.querySelector('#container');
const btn = document.querySelector('#squareNumber');
squares = 16**2;

const divArray = [];
for(let i = 0 ; i<squares ; i++){
    divArray[i] = document.createElement('div');
    divArray[i].className='insideDiv';
    divArray[i].style.height = `${(100/squares)*Math.pow(squares, 0.5)}%`
    divArray[i].style.width = `${(100/squares)*Math.pow(squares, 0.5)}%`
    container.appendChild(divArray[i]);
}
btn.addEventListener('click' , ()=> {
    for(let i = 0; i<squares;i++){
        container.removeChild(divArray[i])
    }
    squares = +prompt('Grid size ? eg:16x16 ?\n max 100');
    if(squares >100){
        squares = +prompt('too many pick max 100');
    }
    squares = squares**2;
    //const insideDivSize = container.style.width/squares;
    for (let i = 0; i<squares ; i++){
        divArray[i] = document.createElement('div');
        divArray[i].className='insideDiv';
        divArray[i].style.height = `${(100/squares)*Math.pow(squares, 0.5)}%`
        divArray[i].style.width = `${(100/squares)*Math.pow(squares, 0.5)}%`
        container.appendChild(divArray[i]);
    }




})
