import * as classes from '/src/models/models';
import { createFleet } from '/src/features/new-game/components/fleet/create-fleet/create-fleet';
import { createCellIdObject } from '/src/features/utils/cell/create-cell-id-object';

export function createGameboard(playerReference) {
  const fleet = createFleet();
  const gameboardsGrid = document.querySelector(`.gameboard-container [data-player="${playerReference}"]`);
  const gameBoardsGridObject = {
    playerReference: gameboardsGrid.dataset.player,
    cells: Array.from(gameboardsGrid.children).map((cell) => createCellIdObject(cell)),
  };
  const gameboard = new classes.Gameboard(gameBoardsGridObject, fleet);
  return gameboard;
}
