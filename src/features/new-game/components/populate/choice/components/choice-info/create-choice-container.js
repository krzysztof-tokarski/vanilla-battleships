import { fluidContainer } from '../../../../../../global.variables';

export function createChoiceContainer() {
  const choiceContainer = document.createElement('div');
  choiceContainer.setAttribute('id', 'choice-container');
  fluidContainer.appendChild(choiceContainer);
}
