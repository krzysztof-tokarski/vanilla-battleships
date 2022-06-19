import { createGameboardsContainer } from './components/gameboards-container/create-gameboards-container';
import { removegameboards } from './components/remove-gameboards/remove-gameboards';
import { createGameboards } from './components/gameboard/create-gameboards';
import { addFleetGameboards } from './components/fleet/fleet-gameboard/add-fleet-gameboards';
import { populateGameboardGridRandomly } from './components/populate/random/populate-gameboard-randomly';
import { renderCurrentChoiceLabel } from './components/populate/choice/render-current-choice-label';

export function prepareNewGame() {
  removegameboards();
  const gameboardsContainer = createGameboardsContainer();
  addFleetGameboards(gameboardsContainer);
  const [humanPlayerGameboard, computerPlayerGameboard] = createGameboards();

  populateGameboardGridRandomly(computerPlayerGameboard);
  // TODO
}
