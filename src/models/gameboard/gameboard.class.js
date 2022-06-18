import { Cell } from '../models';

export class Gameboard {
  constructor(grid, fleet) {
    this.grid = grid;
    this.takenGridCells = [];
    this.blockedGridCells = [];
    this.missedAttacks = 0;
    this.fleet = fleet;
    // this.player = player;
  }

  receiveAttack(coordinates) {
    
  }

  areAllShipsSunk() {
    // TODO
  }

  get gridCells() {
    return this.grid.cells;
  }

  get getTakenCells() {
    return this.takenGridCells;
  }

  get blockedCells() {
    return this.blockedGridCells;
  }

  get gridFleet() {
    return this.fleet;
  }

  getFreeCells() {
    const allCells = this.gridCells;
    const freeCells = [...allCells];
    const takenCells = this.takenGridCells;
    const blockedCells = this.blockedCells;
    const unavailableCells = takenCells.concat(blockedCells);
    unavailableCells.forEach((cell) => {
      const index = freeCells.indexOf(cell);
      freeCells.splice(index, 1);
    });

    return freeCells;
  }

  /**
   * @param {Cell[]} cells
   */
  set modifyTakenCells(cells) {
    this.takenGridCells = this.takenGridCells.concat(cells);
  }
}