import * as globalVariables from '../../../global.variables';

export function createGameboardsContainer() {
  const gameboardsContainer = document.createElement('div');
  gameboardsContainer.setAttribute('id', 'gameboards-container');
  globalVariables.fluidContainer.appendChild(gameboardsContainer);
  return gameboardsContainer;
}
