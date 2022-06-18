// TODO trash?

export function getFreeCells(playerReference) {
  const freeCellsFromDOM = Array.from(document.querySelectorAll(`[data-player="${playerReference}"]`));
  const freeCellsObjectsArray = freeCellsFromDOM.map((cell) => createCellIdObject(cell));
  return freeCellsObjectsArray;
}
