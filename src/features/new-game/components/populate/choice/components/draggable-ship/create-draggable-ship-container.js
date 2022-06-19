export function createDraggableShipContainer() {
  const container = document.createElement('div');
  container.setAttribute('id', 'draggable-ship-container');
  const choiceContainer = document.querySelector('#choice-container');
  choiceContainer.appendChild(container);
}
