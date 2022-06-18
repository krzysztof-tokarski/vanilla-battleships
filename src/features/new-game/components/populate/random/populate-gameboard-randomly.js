// import { getFreeCells } from '/src/features/utils/cell/get-free-cells';
import { verifyCellCompatibility, verifyCellArrayCompatibility } from './verify-compatibility';
import { processVerifiedCellsRow } from './process-verified-cells-row';

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

      const horizontal = true;
      // const horizontal = Math.random() < 0.5 ? true : false;

      if (!reverse && horizontal) {
        const compatibleCells = freeCells.filter((cell) => verifyCellCompatibility(cell, randomFreeCell));
        const verifiedCellsRow = verifyCellArrayCompatibility(compatibleCells, shipsLength);

        if (verifiedCellsRow.length >= shipsLength) {
          invalid = false;
          processVerifiedCellsRow(verifiedCellsRow, gameboard, ship);

          verifiedCellsRow.forEach((cell) => {
            const cellInDOM = document.querySelector(`[data-player="P2"][data-number-coordinate="${cell.numberCoordinate}"][data-letter-coordinate="${cell.letterCoordinate}"]`);
            cellInDOM.classList.add('taken');
          });

          // TODO remove
        }

        // const compatibleCells = freeCells.filter((cell) => verifyCompatibility(cell, randomFreeCell, playerReference));
        // if (compatibleCells.length >= ship.length) {
        //   invalid = false;
        //   freeCells = freeCells.filter((cell) => !(compatibleCells.includes(cell)));
        //   for (let i = 0; i < ship.length; i += 1) {
        //     const loopCell = compatibleCells[i];
        //     if (ship.length === 2) {
        //       console.log(ship, loopCell, i);
        //     }
        //     const cellInDOM = document.querySelector(`[data-player="${playerReference}"][data-number-coordinate="${loopCell.numberCoordinate}"][data-letter-coordinate="${loopCell.letterCoordinate}"]`);
        //     cellInDOM.classList.add('taken');
        //   }
        // } else {
        //   // invalid = false;
        // }
      }
    }
  });
}
