import { changeDirectionButtonValue } from './change-direction-button-value';
import { renderDraggableShip } from '../draggable-ship/render-draggable-ship';

export function processDirectionButtonClick(button, ship) {
  changeDirectionButtonValue(button);
  renderDraggableShip(ship);
}