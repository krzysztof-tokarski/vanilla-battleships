// import { getFreeCells } from '/src/features/utils/cell/get-free-cells';
import { verifyCellVertically, verifyCellHorizontally, verifyVerticalCellArray, verifyHorizontalCellArray } from './verify-compatibility';
import { processVerifiedCellsRow } from './process-verified-cells-row';

export function populateGameboardGridRandomly(gameboard) {
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
      const horizontal = Math.random() < 0.5;
      // const horizontal = Math.random() < 0.5 ? true : false;

      if (!reverse && !horizontal) {
        const compatibleCells = freeCells.filter((cell) => verifyCellVertically(cell, randomFreeCell));
        const verifiedCellsRow = verifyVerticalCellArray(compatibleCells, shipsLength);

        if (verifiedCellsRow.length >= shipsLength) {
          invalid = false;
          processVerifiedCellsRow(verifiedCellsRow, gameboard, ship);
        }
      } else if (!reverse && horizontal) {
        const compatibleCells = freeCells.filter((cell) => verifyCellHorizontally(cell, randomFreeCell));
        const verifiedCellsRow = verifyHorizontalCellArray(compatibleCells, shipsLength);

        if (verifiedCellsRow.length >= shipsLength) {
          invalid = false;
          processVerifiedCellsRow(verifiedCellsRow, gameboard, ship);
        }
      }
    }
  });
}


// TODO remove
