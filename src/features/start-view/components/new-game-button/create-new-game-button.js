import { prepareNewGame } from '../../../new-game/prepare-new-game';

export function createNewGameButton() {
  const button = document.createElement('button');
  button.setAttribute('id', 'new-game-button');
  button.textContent = 'NEW GAME';
  button.addEventListener('click', () => prepareNewGame());
  return button;
}
