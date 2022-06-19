export function processVerifiedCellsRow(verifiedCellsRow, gameboard, ship) {
  gameboard.modifyTakenCells = verifiedCellsRow;
  ship.shipsAreas = verifiedCellsRow;
}
