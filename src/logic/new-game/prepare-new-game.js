import { Player } from '../../models/player/player.class';
import { createGridsContainer } from './components/grids-container/create-grids-container';
import { createShipsGrid } from './components/ships-grid/create-ships-grid';
import * as globalVariables from '../global.variables';

export function prepareNewGame() {
  // const player1 = new Player();
  // const player2 = new Player();

  globalVariables.fluidContainer.innerHTML = '';
  
  const gridsContainer = createGridsContainer();
  globalVariables.fluidContainer.appendChild(gridsContainer);
  const shipGrid1 = createShipsGrid();
  gridsContainer.appendChild(shipGrid1);
  // TODO
  const shipGrid2 = createShipsGrid();
  gridsContainer.appendChild(shipGrid2);

}
