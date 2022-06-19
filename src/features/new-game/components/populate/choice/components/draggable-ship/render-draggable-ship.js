import { createDraggableShip } from './create-draggable-ship';
import { getOrientation } from './get-orientation';

export function renderDraggableShip(ship) {
  const orientation = getOrientation();
  const draggableShip = createDraggableShip(ship, orientation);
  const parent = document.querySelector('#draggable-ship-container');
  parent.innerHTML = '';
  parent.appendChild(draggableShip);
}
