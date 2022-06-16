/* eslint-disable no-plusplus */
export function createShipsGrid() {
  const currentGrid = document.querySelector('.grid');
  let prefix = 'P1';
  if (currentGrid) {
    prefix = 'P2';
  }

  const letterCoordinates = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

  const gridContainer = document.createElement('div');
  gridContainer.classList.add('grid-container');
  const gridTopContainer = document.createElement('div');
  gridTopContainer.classList.add('grid-top-container');
  const gridBottomContainer = document.createElement('div');
  gridBottomContainer.classList.add('grid-bottom-container');

  const gridNumberCoordinatesContainer = document.createElement('div');
  gridNumberCoordinatesContainer.classList.add('grid-number-coordinates-container');
  const gridLetterCoordinatesContainer = document.createElement('div');
  gridLetterCoordinatesContainer.classList.add('grid-letter-coordinates-container');

  letterCoordinates.forEach((letterCoordinate) => {
    const indexPosition = letterCoordinates.indexOf(letterCoordinate);
    if (indexPosition === 0) {
      const emptyCell = document.createElement('div');
      emptyCell.classList.add('cell');
      gridLetterCoordinatesContainer.appendChild(emptyCell);
    }

    const letterCoordinateCell = document.createElement('div');
    letterCoordinateCell.classList.add('cell');
    const numberCoordinateCell = document.createElement('div');
    numberCoordinateCell.classList.add('cell');
    letterCoordinateCell.textContent = letterCoordinate;
    numberCoordinateCell.textContent = letterCoordinates.indexOf(letterCoordinate) + 1;
    gridLetterCoordinatesContainer.appendChild(letterCoordinateCell);
    gridNumberCoordinatesContainer.appendChild(numberCoordinateCell);
  });

  const grid = document.createElement('div');
  for (let i = 1; i < 11; i++) {
    letterCoordinates.forEach((letterCordinate) => {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.setAttribute('data-cell-id', `${prefix}-${letterCordinate}-${i}`);
      grid.appendChild(cell);
    });
  }
  grid.classList.add('grid');

  gridTopContainer.appendChild(gridLetterCoordinatesContainer);
  gridBottomContainer.appendChild(gridNumberCoordinatesContainer);
  gridBottomContainer.appendChild(grid);

  gridContainer.appendChild(gridTopContainer);
  gridContainer.appendChild(gridBottomContainer);

  return gridContainer;
}
