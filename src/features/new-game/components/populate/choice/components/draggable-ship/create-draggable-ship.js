export function createDraggableShip(ship, orientation) {
  // const { shipsLength } = ship;
  const shipsLength = ship.length;
  // TODO
  // function dragstartHandler(ev) {
  //   // Add the target element's id to the data transfer object
  //   ev.dataTransfer.setData('text/plain', ev.target.innerText);
  //   ev.dataTransfer.setData('text/html', ev.target.outerHTML);
  //   ev.dataTransfer.setData('text/uri-list', ev.target.ownerDocument.location.href);
  //   ev.dataTransfer.dropEffect = "move";
  //   ev.dataTransfer.dropEffect = "link";
  // }

  const shipCellsContainer = document.createElement('div');
  shipCellsContainer.setAttribute('id', 'ship-cells-container');
  shipCellsContainer.setAttribute('draggable', true);
  // shipCellsContainer.addEventListener('dragstart', dragstartHandler);

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
