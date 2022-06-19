export function renderCurrentChoiceLabel(shipsName) {
  const currentChoiceTextContainer = document.querySelector('#current-choice-text-container');

  if (!currentChoiceTextContainer) {
    const newChoiceTextContainer = document.createElement('div');
    newChoiceTextContainer.setAttribute('id', 'current-choice-text-container');

    const currentChoiceStaticText = document.createElement('h3');
    currentChoiceStaticText.textContent = 'Currently placing:';
    const currentChoiceDynamicText = document.createElement('h3');
    currentChoiceDynamicText.setAttribute('id', 'current-choice-dynamic-text');
    currentChoiceDynamicText.textContent = shipsName;

    newChoiceTextContainer.appendChild(currentChoiceStaticText);
    newChoiceTextContainer.appendChild(currentChoiceDynamicText);

    const parent = document.querySelector('#choice-container');

    parent.appendChild(newChoiceTextContainer);
  } else {
    const currentChoiceDynamicText = document.querySelector('#curent-choice-dynamic-text');
    currentChoiceDynamicText.textContent = shipsName;
  }
}
// TODO delete repeats
