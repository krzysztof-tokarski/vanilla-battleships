/* eslint-disable max-len */
// import { Ship } from "../../../../models/models";
// import { createFleet } from "../fleet/create-fleet/create-fleet";




function verifyCompatibility(cell, randomFreeCell, playerReference) {
  const [cellsLetter, cellsNumber] = [cell.letterCoordinate, cell.numberCoordinate];
  // eslint-disable-next-line max-len
  const [randomCellsLetter, randomCellsNumber] = [randomFreeCell.letterCoordinate, randomFreeCell.numberCoordinate];

  const applicableCells = document.querySelectorAll(`[data-player="${playerPrefix}"][data-letter-coordinate="${randomCellsLetter}"]`);
  // console.log(applicableCells);

  // const cellInDOM = document.querySelector(`[data-player="${playerPrefix}"][data-number-coordinate="${cell.numberCoordinate}"][data-letter-coordinate="${cell.letterCoordinate}"]`);
  // const isTaken = cellInDOM.classList.contains('taken'); 
  return cellsLetter === randomCellsLetter && cellsNumber >= randomCellsNumber;
}

export function populateGrid(playerReference) {
  const fleet = createFleet();
  let freeCells = getFreeCells(playerReference);
  const horizontal = true;
  // console.log(fleet);

  fleet.forEach((ship) => {
    let invalid = true;
    while (invalid) {
      const randomFreeCellsIndex = Math.floor(Math.random() * freeCells.length);
      const randomFreeCell = freeCells[randomFreeCellsIndex];

      const shipsLength = ship.length;
      const differenceVerification = randomFreeCell.numberCoordinate - shipsLength;
      if (differenceVerification >= 0) {
        const compatibleCells = freeCells.filter((cell) => verifyCompatibility(cell, randomFreeCell, playerReference));
        if (compatibleCells.length >= ship.length) {
          invalid = false;
          freeCells = freeCells.filter((cell) => !(compatibleCells.includes(cell)));
          for (let i = 0; i < ship.length; i += 1) {
            const loopCell = compatibleCells[i];
            if (ship.length === 2) {
              // console.log(ship, loopCell, i);
            }
            const cellInDOM = document.querySelector(`[data-player="${playerReference}"][data-number-coordinate="${loopCell.numberCoordinate}"][data-letter-coordinate="${loopCell.letterCoordinate}"]`);
            cellInDOM.classList.add('taken');
          }
        } else {
          // invalid = false;
        }
      }
    }
  });
}
