export class Ship {
  constructor(name, cellRequirement) {
    this.name = name;
    this.cellRequirement = cellRequirement;
    this.areas = [];
    this.hitAreas = [];
    this.neighbourAreas = [];
    this.sunk = false;
  }

  get shipsLength() {
    return this.cellRequirement;
  }

  /**
   * @param {{letterCoordinate: string, numberCoordinate: number}[]} cells
   */
  set shipsAreas(cells) {
    this.areas = cells;
  }

  takeDamage() {
  // TODO
  }

  isSunk() {
  // TODO
  }


}