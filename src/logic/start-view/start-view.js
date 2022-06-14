import * as globalVariables from '../global.variables';
import { createNewGameButton } from './components/new-game-button/create-new-game-button';

export function startView() {
  const button = createNewGameButton();
  globalVariables.buttonsContainer.appendChild(button);
}
