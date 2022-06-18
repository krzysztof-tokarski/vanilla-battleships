// import { getFreeCells } from '/src/features/utils/cell/get-free-cells';
import { verifyCellCompatibility, verifyCellArrayCompatibility } from './verify-compatibility';
import { processVerifiedCellsRow } from './process-verified-cells-row';
import { LETTER_COORDINATES } from '/src/features/global.variables';
import { Cell } from '../../../../../models/models';

export function verifyHorizontal(cell, randomFreeCell) {
  const [cellsLetter, cellsNumber] = [cell.letterCoordinate, cell.numberCoordinate];
  const [randomCellsLetter, randomCellsNumber] = [randomFreeCell.letterCoordinate, randomFreeCell.numberCoordinate];

  return cellsLetter !== randomCellsLetter && cellsNumber === randomCellsNumber;
}

export function verifyHorizontalArray(cellsArray, shipsLength) {
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

export function populateGameboardGridRandomly(gameboard) {
  const allCells = gameboard.gridCells;
  const fleet = gameboard.gridFleet;

  fleet.forEach((ship) => {
    let invalid = true;
    const { shipsLength } = ship;
    const freeCells = gameboard.getFreeCells();

    while (invalid) {
      const randomFreeCellsIndex = Math.floor(Math.random() * freeCells.length);
      const randomFreeCell = freeCells[randomFreeCellsIndex];

      const reverse = false;
      // const reverse = randomFreeCell.numberCoordinate - shipsLength >= 0;
      // TODO convert to reverse-boolean;

      // const horizontal = false;
      const horizontal = Math.random() < 0.5 ? true : false;

      if (!reverse && !horizontal) {
        const compatibleCells = freeCells.filter((cell) => verifyCellCompatibility(cell, randomFreeCell));
        const verifiedCellsRow = verifyCellArrayCompatibility(compatibleCells, shipsLength);

        if (verifiedCellsRow.length >= shipsLength) {
          invalid = false;
          processVerifiedCellsRow(verifiedCellsRow, gameboard, ship);

          verifiedCellsRow.forEach((cell) => {
            const cellInDOM = document.querySelector(`[data-player="P2"][data-number-coordinate="${cell.numberCoordinate}"][data-letter-coordinate="${cell.letterCoordinate}"]`);
            cellInDOM.classList.add('taken');
          });
          console.log(document.querySelectorAll('.taken'));
          // TODO remove
        }
      } else if (!reverse && horizontal) {
        const compatibleCells = freeCells.filter((cell) => verifyHorizontal(cell, randomFreeCell));
        const verifiedCellsRow = verifyHorizontalArray(compatibleCells, shipsLength);

        if (verifiedCellsRow.length >= shipsLength) {
          invalid = false;
          processVerifiedCellsRow(verifiedCellsRow, gameboard, ship);

          verifiedCellsRow.forEach((cell) => {
            const cellInDOM = document.querySelector(`[data-player="P2"][data-number-coordinate="${cell.numberCoordinate}"][data-letter-coordinate="${cell.letterCoordinate}"]`);
            cellInDOM.classList.add('taken');
          });
          console.log(document.querySelectorAll('.taken'));
        }
      }
    }
  });
}
