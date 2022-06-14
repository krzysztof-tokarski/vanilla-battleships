/* eslint-disable no-plusplus */
export function createShipsGrid() {
  const currentGrid = document.querySelector('.grid');
  let prefix = 'P1';
  if (currentGrid) {
    prefix = 'P2';
  }

  const letterCordinates = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

  const grid = document.createElement('div');
  for (let i = 1; i < 11; i++) {
    letterCordinates.forEach((letterCordinate) => {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.setAttribute('data-cell-id', `${prefix}-${letterCordinate}-${i}`);
      grid.appendChild(cell);
    });
  }
  grid.classList.add('grid');
  return grid;
}
