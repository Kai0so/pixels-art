const firstColor = document.getElementsByClassName('color')[0];
const secondColor = document.getElementsByClassName('color')[1];
const thirdColor = document.getElementsByClassName('color')[2];
const fourthColor = document.getElementsByClassName('color')[3];

firstColor.style.backgroundColor = 'black';
secondColor.style.backgroundColor = 'red';
thirdColor.style.backgroundColor = 'blue';
fourthColor.style.backgroundColor = 'yellow';

const pixelBoard = document.getElementById('pixel-board');
const pixelBoardRows = document.getElementsByClassName('pixel-board-rows');

for (let i = 0; i < 5; i += 1) {
  const row = document.createElement('div');
  pixelBoard.appendChild(row).className = 'pixel-board-rows';
}

for (let j = 0; j < 5; j += 1) {
  for (let k = 0; k < 5; k += 1) {
    const newCell = document.createElement('div');
    pixelBoardRows[k].appendChild(newCell).className = 'pixel';
  }
}

firstColor.classList.add('selected');

function selectColor(e) {
  let colorList = document.querySelectorAll('.color');
  for (let i = 0; i < colorList.length; i += 1) {
    colorList[i].className = 'color';
    e.target.className = "color selected";
  }
}

function pixelListener() {
  const colorSelector = document.querySelectorAll('.color');
  for (let i = 0; i < colorSelector.length; i += 1) {
    colorSelector[i].addEventListener('click', selectColor);
  }
}

pixelListener();
