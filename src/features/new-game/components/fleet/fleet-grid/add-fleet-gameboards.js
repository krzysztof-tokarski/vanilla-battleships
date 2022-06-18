import { createFleetGameboard } from './create-fleet-gameboard';
import * as globalVariables from '../../../../global.variables';

function addFleetGameboard(gameboardsContainer, playerReference) {
  const fleetgameboard = createFleetGameboard(playerReference);
  gameboardsContainer.appendChild(fleetgameboard);
  return fleetgameboard;
}

export function addFleetGameboards(gameboardsContainer) {
  const humanPlayerFleetgameboard = addFleetGameboard(gameboardsContainer, globalVariables.humanPlayerReference);
  const computerPlayerFleetgameboard = addFleetGameboard(gameboardsContainer, globalVariables.computerPlayerReference);
  return [humanPlayerFleetgameboard, computerPlayerFleetgameboard];
}
