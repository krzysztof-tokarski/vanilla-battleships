export class Gameboard {
  constructor(grid, ships, player) {
    this.grid = grid;
    this.missedAttacks = 0;
    this.ships = ships;
    this.player = player;
  }

  receiveAttack(coordinates) {
    
  }

  areAllShipsSunk() {
    // TODO
  }

}