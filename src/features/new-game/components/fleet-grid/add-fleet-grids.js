import { createFleetGrid } from './create-fleet-grid';
import * as globalVariables from '../../../global.variables';
import { createGameboard } from '../populate-grid/components/create-gameboard/create-gameboard';

export function addFleetGrids(gridsContainer) {
  const shipGrid1 = createFleetGrid(globalVariables.humanPlayerReference);
  gridsContainer.appendChild(shipGrid1);
  const gameboard1 = createGameboard(globalVariables.humanPlayerReference);
  console.log(gameboard1);
  const shipGrid2 = createFleetGrid(globalVariables.computerPlayerReference);
  gridsContainer.appendChild(shipGrid2);
  const gameboard2 = createGameboard(globalVariables.computerPlayerReference);
  console.log(gameboard2);
  return [shipGrid1, shipGrid2];
}
