export function createCellIdObject(cell) {
  const cellDataset = cell.dataset;
  const cellIdObject = { letterCoordinate: cellDataset.letterCoordinate, numberCoordinate: Number(cellDataset.numberCoordinate) };
  return cellIdObject;
}
