import { LETTER_COORDINATES } from '../../../../global.variables';

export function verifyCellVertically(cell, randomFreeCell) {
  const [cellsLetter, cellsNumber] = [cell.letterCoordinate, cell.numberCoordinate];
  const [randomCellsLetter, randomCellsNumber] = [randomFreeCell.letterCoordinate, randomFreeCell.numberCoordinate];

  return cellsLetter === randomCellsLetter && cellsNumber >= randomCellsNumber;
}

export function verifyVerticalCellArray(cellsArray, shipsLength) {
  let validRow = [];

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
        validRow = [];
      }
    }
  }
  return validRow;
}

export function verifyCellHorizontally(cell, randomFreeCell) {
  const [cellsLetter, cellsNumber] = [cell.letterCoordinate, cell.numberCoordinate];
  const [randomCellsLetter, randomCellsNumber] = [randomFreeCell.letterCoordinate, randomFreeCell.numberCoordinate];

  return cellsLetter !== randomCellsLetter && cellsNumber === randomCellsNumber;
}

export function verifyHorizontalCellArray(cellsArray, shipsLength) {
  let validRow = [];

  for (const cell of cellsArray) {
    if (validRow.length === shipsLength) {
      break;
    }

    if (validRow.length === 0) {
      validRow.push(cell);
    } else {
      const lastCell = validRow.at(-1);
      const loopCellLetter = cell.letterCoordinate;
      const lastCellLetter = lastCell.letterCoordinate;
      const indexOfLoopCellLetter = LETTER_COORDINATES.indexOf(loopCellLetter);
      const indexOfLastCellLetter = LETTER_COORDINATES.indexOf(lastCellLetter);

      if (indexOfLoopCellLetter === (indexOfLastCellLetter + 1)) {
        validRow.push(cell);
      } else {
        validRow = [];
      }
    }
  }
  return validRow;
}
