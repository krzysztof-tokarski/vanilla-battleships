export function createDraggableShip(ship, orientation) {
  const shipsLength = ship.length;

  function dragStart(e) {
    console.log('drag starts...');
    e.dataTransfer.setData('text/plain', e.target.id);
    // setTimeout(() => {
    //   e.target.classList.add('hide');
    // }, 0);
  }

  function registerHoverTarget(e) {
    const { target } = e;
    const { shipName, cellNo } = target.dataset;
    const lastCell = { shipName, cellNo };
    sessionStorage.setItem('lastCell', JSON.stringify(lastCell));
  }

  const shipCellsContainer = document.createElement('div');
  shipCellsContainer.setAttribute('id', 'ship-cells-container');
  shipCellsContainer.setAttribute('draggable', true);
  shipCellsContainer.addEventListener('dragstart', dragStart);

  for (let i = 0; i < shipsLength; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.setAttribute('data-ship-name', `${ship.name}`);
    cell.setAttribute('data-cell-no', `${i + 1}`);
    cell.addEventListener('mouseenter', registerHoverTarget);
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
