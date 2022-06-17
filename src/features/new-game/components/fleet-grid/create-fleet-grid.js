/* eslint-disable no-plusplus */
export function createFleetGrid(playerReference) {
  // const currentGrid = document.querySelector('.grid');
  // if (currentGrid) {
  //   prefix = 'P2';
  // }

  const LETTER_COORDINATES = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

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

  LETTER_COORDINATES.forEach((letterCoordinate) => {
    const indexPosition = LETTER_COORDINATES.indexOf(letterCoordinate);
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
    numberCoordinateCell.textContent = LETTER_COORDINATES.indexOf(letterCoordinate) + 1;
    gridLetterCoordinatesContainer.appendChild(letterCoordinateCell);
    gridNumberCoordinatesContainer.appendChild(numberCoordinateCell);
  });

  const grid = document.createElement('div');
  for (let i = 1; i < 11; i++) {
    LETTER_COORDINATES.forEach((letterCordinate) => {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.setAttribute('data-player', `${[playerReference]}`);
      cell.setAttribute('data-number-coordinate', `${[i]}`);
      cell.setAttribute('data-letter-coordinate', `${[letterCordinate]}`);
      // cell.setAttribute(`data-${prefix}-cell-id`, `${letterCordinate}-${i}`);
      grid.appendChild(cell);
    });
  }
  grid.classList.add('grid');
  grid.setAttribute('data-player', `${[playerReference]}`);

  gridTopContainer.appendChild(gridLetterCoordinatesContainer);
  gridBottomContainer.appendChild(gridNumberCoordinatesContainer);
  gridBottomContainer.appendChild(grid);

  gridContainer.appendChild(gridTopContainer);
  gridContainer.appendChild(gridBottomContainer);

  return gridContainer;
}