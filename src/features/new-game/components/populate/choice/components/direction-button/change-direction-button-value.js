/**
 * @param {HTMLElement} button
 */

export function changeDirectionButtonValue(button) {
  if (button.value === 'horizontal') {
    button.value = 'vertical';
    button.textContent = 'vertical';
  } else {
    button.value = 'horizontal';
    button.textContent = 'horizontal';
  }
}