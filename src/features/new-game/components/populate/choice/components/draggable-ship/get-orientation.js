export function getOrientation() {
  const button = document.querySelector('#direction-button');
  const orientation = button.getAttribute('value');
  return orientation;
}