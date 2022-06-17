/* eslint-disable max-len */
import { Ship } from "../../../../models/models";
import { createFleet } from "./components/create-fleet/create-fleet";

function createCellObject(cell) {
  // const randomFreeCellsIndex = Math.floor(Math.random() * freeCells.length);
  // const randomFreeCell = freeCells[randomFreeCellsIndex];


  // const randomFreeCellId = String(randomFreeCell.dataset.p1CellId);
  // const randomFreeCellIdObject = { letterCoordinate: randomFreeCellId.slice(0, 1), numberCoordinate: '' };

  // const randomFreeCellDataset = randomFreeCell.dataset;
  // const randomFreeCellIdObject = { letterCoordinate: randomFreeCellDataset.letterCoordinate, numberCoordinate: randomFreeCellDataset.numberCoordinate}

  const cellDataset = cell.dataset;
  const randomFreeCellIdObject = { letterCoordinate: cellDataset.letterCoordinate, numberCoordinate: cellDataset.numberCoordinate};

  // if (randomFreeCellId.length === 4) {
  //   randomFreeCellIdObject.numberCoordinate = 10;
  // } else {
  //   randomFreeCellIdObject.numberCoordinate = Number(randomFreeCellId.slice(-1));
  // }

  return randomFreeCellIdObject;
}

function getFreeCells() {
  const freeCellsFromDOM = Array.from(document.querySelectorAll('[data-player="P1"]'));
  // TODO parameter
  const freeCellsObjectsArray = freeCellsFromDOM.map((cell) => createCellObject(cell));
  
  return freeCellsObjectsArray;
}

function verifyCompatibility(cell, randomFreeCell) {
  const [cellsLetter, cellsNumber] = [cell.letterCoordinate, cell.numberCoordinate];
  // eslint-disable-next-line max-len
  const [randomCellsLetter, randomCellsNumber] = [randomFreeCell.letterCoordinate, randomFreeCell.numberCoordinate];
  return cellsLetter === randomCellsLetter && cellsNumber >= randomCellsNumber;
}

export function populateGrid() {
  const fleet = createFleet();
  let freeCells = getFreeCells();
  // let freeCellsObjectsArray = [];
  // freeCells.forEach(cell => {
  //   const cellId = String(cell.dataset.p1CellId);
  //   const cellIdObject = { letterCoordinate: cell.slice(0, 1), numberCoordinate: '' };
  //   if (cellId.length === 4) {
  //     cellIdObject.numberCoordinate = 10;
  //   } else {
  //     cellIdObject.numberCoordinate = Number(randomFreeCellId.slice(-1));
  //   }
  //   freeCellsObjectsArray.push(cellIdObject);
  // })

  // console.log(freeCells);

  // freeCells.forEach(cell => {
  //   console.log(cell.dataset.p1CellId);
  // })

  const horizontal = true;

  fleet.forEach(ship => {
    let invalid = true;

    while (invalid) {
      const randomFreeCellsIndex = Math.floor(Math.random() * freeCells.length);
      const randomFreeCell = freeCells[randomFreeCellsIndex];

      const shipsLength = ship.length;
      const differenceVerification = randomFreeCell.numberCoordinate - shipsLength;
      if (differenceVerification >= 0) {
        const compatibleCells = freeCells.filter((cell) => verifyCompatibility(cell, randomFreeCell));
        if (compatibleCells.length >= ship.length) {
          invalid = false;
          console.log(compatibleCells);
          freeCells = freeCells.filter((cell) => !(compatibleCells.includes(cell)));
          console.log(freeCells)
        } else {
          // invalid = false;
        }
      }
    }
  })
  
}

