import * as globalVariables from '../../../global.variables';

export function createGridsContainer() {
  const gridsContainer = document.createElement('div');
  gridsContainer.setAttribute('id', 'grids-container');
  return gridsContainer;
}
