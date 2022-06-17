import * as classes from '../../../../../../models/models';
import { createFleet } from '../create-fleet/create-fleet';

export function createGameboard(playerReference) {
  const fleet = createFleet();
  const grid = document.querySelector(`.grid-container [data-player="${playerReference}"]`);
  const gameboard = new classes.Gameboard(grid, fleet);
  return gameboard;
}