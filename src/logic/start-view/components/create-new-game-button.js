import { prepareNewGame } from '../../prepare-new-game/prepare-new-game';

export function createNewGameButton() {
  const button = document.createElement('button');
  button.classList.add('new-game-button');
  button.textContent = 'NEW GAME';
  button.addEventListener('click', () => prepareNewGame());
  return button;
}
