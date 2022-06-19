import { changeDirectionButtonValue } from './change-direction-button-value';

export function createDirectionButton() {
  const parent = document.querySelector('#choice-container');
  const button = document.createElement('button');
  button.setAttribute('id', 'direction-button');
  button.setAttribute('value', 'horizontal');
  button.textContent = 'horizontal';
  // eslint-disable-next-line no-shadow
  button.addEventListener('click', () => changeDirectionButtonValue(button));
  parent.appendChild(button);
}
