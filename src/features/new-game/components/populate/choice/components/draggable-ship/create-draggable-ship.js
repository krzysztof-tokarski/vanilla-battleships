export function createDraggableShip(ship, orientation) {
  // const { shipsLength } = ship;
  const shipsLength = ship.length;
  // TODO
  const shipCellsContainer = document.createElement('div');
  shipCellsContainer.setAttribute('id', 'ship-cells-container');
  shipCellsContainer.setAttribute('draggable', true);

  for (let i = 0; i < shipsLength; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    shipCellsContainer.appendChild(cell);
  }

  if (orientation === 'horizontal') {
    shipCellsContainer.classList.add('horizontal');
    shipCellsContainer.classList.remove('vertical');
  } else {
    shipCellsContainer.classList.add('vertical');
    shipCellsContainer.classList.remove('horizontal');
  }

  return shipCellsContainer;
}
