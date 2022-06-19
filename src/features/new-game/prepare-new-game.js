import { createGameboardsContainer } from './components/gameboards-container/create-gameboards-container';
import { removegameboards } from './components/remove-gameboards/remove-gameboards';
import { createGameboards } from './components/gameboard/create-gameboards';
import { addFleetGameboards } from './components/fleet/fleet-gameboard/add-fleet-gameboards';
import { populateGameboardGridRandomly } from './components/populate/random/populate-gameboard-randomly';
import { renderCurrentChoiceLabel } from './components/populate/choice/components/choice-info/render-current-choice-label';
import { createChoiceContainer } from './components/populate/choice/components/choice-info/create-choice-container';
import { createDirectionButton } from './components/populate/choice/components/direction-button/create-direction-button';

export function prepareNewGame() {
  removegameboards();
  const gameboardsContainer = createGameboardsContainer();
  addFleetGameboards(gameboardsContainer);
  const [humanPlayerGameboard, computerPlayerGameboard] = createGameboards();

  populateGameboardGridRandomly(computerPlayerGameboard);

  // TODO WRAPPER
  createChoiceContainer();
  renderCurrentChoiceLabel('xD');
  createDirectionButton();
  // TODO WRAPPER
}
