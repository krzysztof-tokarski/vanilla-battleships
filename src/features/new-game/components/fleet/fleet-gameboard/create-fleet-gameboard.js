import { computerPlayerReference } from '/src/features/global.variables';

function dragEnter(e) {
  e.preventDefault();
  console.log('drag enter');
  e.target.classList.add('drag-over');
}

function dragOver(e) {
  e.preventDefault();
  console.log('dragging intensifies');
  e.target.classList.add('drag-over');
}

function dragLeave(e) {
  console.log('dragging leave');
  e.target.classList.remove('drag-over');
}

function drop(e) {
  console.log('DROP!');
  e.target.classList.remove('drag-over');

  // get the draggable element
  const id = e.dataTransfer.getData('text/plain');
  const draggable = document.getElementById(id);

  // add it to the drop target
  console.log(e.target);
  // display the draggable element
  // draggable.classList.remove('hide');
}


/* eslint-disable no-plusplus */
export function createFleetGameboard(playerReference) {
  const LETTER_COORDINATES = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

  const gameboardContainer = document.createElement('div');
  gameboardContainer.classList.add('gameboard-container');
  const gameboardTopContainer = document.createElement('div');
  gameboardTopContainer.classList.add('gameboard-top-container');
  const gameboardBottomContainer = document.createElement('div');
  gameboardBottomContainer.classList.add('gameboard-bottom-container');

  const gameboardNumberCoordinatesContainer = document.createElement('div');
  gameboardNumberCoordinatesContainer.classList.add('gameboard-number-coordinates-container');
  const gameboardLetterCoordinatesContainer = document.createElement('div');
  gameboardLetterCoordinatesContainer.classList.add('gameboard-letter-coordinates-container');

  LETTER_COORDINATES.forEach((letterCoordinate) => {
    const indexPosition = LETTER_COORDINATES.indexOf(letterCoordinate);
    if (indexPosition === 0) {
      const emptyCell = document.createElement('div');
      emptyCell.classList.add('cell');
      gameboardLetterCoordinatesContainer.appendChild(emptyCell);
    }

    const letterCoordinateCell = document.createElement('div');
    letterCoordinateCell.classList.add('cell');
    const numberCoordinateCell = document.createElement('div');
    numberCoordinateCell.classList.add('cell');
    letterCoordinateCell.textContent = letterCoordinate;
    numberCoordinateCell.textContent = LETTER_COORDINATES.indexOf(letterCoordinate) + 1;
    gameboardLetterCoordinatesContainer.appendChild(letterCoordinateCell);
    gameboardNumberCoordinatesContainer.appendChild(numberCoordinateCell);
  });

  const gameboard = document.createElement('div');
  for (let i = 1; i < 11; i++) {
    LETTER_COORDINATES.forEach((letterCordinate) => {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.setAttribute('data-player', `${playerReference}`);
      cell.setAttribute('data-number-coordinate', `${i}`);
      cell.setAttribute('data-letter-coordinate', `${letterCordinate}`);
      // cell.setAttribute(`data-${prefix}-cell-id`, `${letterCordinate}-${i}`);
      if (playerReference === computerPlayerReference) {
        cell.classList.add('disabled');
      } else {
        cell.addEventListener('dragenter', dragEnter);
        cell.addEventListener('dragover', dragOver);
        cell.addEventListener('dragleave', dragLeave);
        cell.addEventListener('drop', drop);
      }
      gameboard.appendChild(cell);
    });
  }
  gameboard.classList.add('gameboard');
  gameboard.setAttribute('data-player', `${playerReference}`);

  gameboardTopContainer.appendChild(gameboardLetterCoordinatesContainer);
  gameboardBottomContainer.appendChild(gameboardNumberCoordinatesContainer);
  gameboardBottomContainer.appendChild(gameboard);

  gameboardContainer.appendChild(gameboardTopContainer);
  gameboardContainer.appendChild(gameboardBottomContainer);

  const gameboardLabel = document.createElement('h2');

  if (playerReference === 'P1') {
    gameboardLabel.textContent = 'Your gameboard';
  } else {
    gameboardLabel.textContent = "Opponent's gameboard";
  }

  gameboardContainer.appendChild(gameboardLabel);

  return gameboardContainer;
}

function makeGameboardAcceptDraggables() {

}
