export default class Gameboard {
  constructor(grid, ships) {
    this.grid = grid;
    this.missedAttacks = 0;
    this.ships = ships;
  }

  receiveAttack(coordinates) {
    
  }

  areAllShipsSunk() {
    // TODO
  }

}