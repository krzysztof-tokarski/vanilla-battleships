import * as globalVariables from '../global.variables';
import { createNewGameButton } from './components/create-new-game-button';

export function startView() {
  const button = createNewGameButton();
  globalVariables.fluidContainer.appendChild(button);
}