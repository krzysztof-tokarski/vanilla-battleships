import { Cell } from '../../../../../models/cell/cell.class';
import { Gameboard, Ship } from '../../../../../models/models';


/**
 * @param {Cell[]} verifiedCellsRow
 * @param {Gameboard} gameboard
 * @param {Ship} ship
 */

export function processVerifiedCellsRow(verifiedCellsRow, gameboard, ship) {
  gameboard.takenCells.push(verifiedCellsRow);
  ship.shipsAreas = verifiedCellsRow;
}
