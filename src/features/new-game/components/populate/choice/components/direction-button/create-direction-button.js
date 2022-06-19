import { processDirectionButtonClick } from './process-direction-button-click';

export function createDirectionButton() {
  const parent = document.querySelector('#choice-container');
  const button = document.createElement('button');
  button.setAttribute('id', 'direction-button');
  button.setAttribute('value', 'horizontal');
  button.textContent = 'horizontal';
  // eslint-disable-next-line no-shadow
  
  const ship = {length: 5}

  button.addEventListener('click', () => processDirectionButtonClick(button, ship));
  // TODO
  parent.appendChild(button);
}
