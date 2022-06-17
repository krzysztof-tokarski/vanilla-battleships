import { Player } from '../../models/player/player.class';
import { createGridsContainer } from './components/grids-container/create-grids-container';
import { createFleetGrid } from './components/fleet-grid/create-fleet-grid';
import * as globalVariables from '../global.variables';
import { populateGrid } from './components/populate-grid/populate-board';
import { removeGrids } from './components/remove-grids/remove-grids';
import { addFleetGrids } from './components/fleet-grid/add-fleet-grids';

export function prepareNewGame() {
  // const player1 = new Player();
  // const player2 = new Player();
  removeGrids();
  const gridsContainer = createGridsContainer();
  addFleetGrids(gridsContainer);
  populateGrid(globalVariables.humanPlayerReference);
  populateGrid(globalVariables.computerPlayerReference);
}
