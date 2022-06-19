import { Cell } from '../models';

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

  set shipsAreas(cells) {
    this.areas = cells;
  }

  get shipsAreas() {
    return this.areas;
  }


  /**
   * @param {Cell[]} cells
   * @param {Cell} cell
   */


  set setHitAreas(cell) {
    this.hitAreas.push(cell);
  }
  
  get getHitAreas() {
    return this.hitAreas;
  }

  set setName(value) {
    this.name = value;
  }

  get getName() {
    return this.name;
  }


  takeDamage(cell) {
    if (this.getHitAreas.contains(cell)) {
      this.hitAreas = cell;
    }
  }

  isSunk() {
    this.shipsLength === this.getHitAreas
  }


}