export function verifyCellCompatibility(cell, randomFreeCell) {
  const [cellsLetter, cellsNumber] = [cell.letterCoordinate, cell.numberCoordinate];
  const [randomCellsLetter, randomCellsNumber] = [randomFreeCell.letterCoordinate, randomFreeCell.numberCoordinate];

  return cellsLetter === randomCellsLetter && cellsNumber >= randomCellsNumber;
}

export function verifyCellArrayCompatibility(cellsArray, shipsLength) {
  const validRow = [];

  for (const cell of cellsArray) {
    if (validRow.length === shipsLength) {
      break;
    }

    if (validRow.length === 0) {
      validRow.push(cell);
    } else {
      const lastCell = validRow.at(-1);

      if (cell.numberCoordinate === (lastCell.numberCoordinate + 1)) {
        validRow.push(cell);
      } else {
        console.log(lastCell, cell);
      // validRow = [];
      }
    }
  }
  return validRow;

}
