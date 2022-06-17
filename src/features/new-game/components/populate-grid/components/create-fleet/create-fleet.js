import { Ship } from "../../../../../../models/models";

export function createFleet() {
  const carrier = new Ship(5);
  const battleship = new Ship(4);
  const cruiser = new Ship(3);
  const submarine = new Ship(3);
  const destroyer = new Ship(2);

  const fleet = [carrier, battleship, cruiser, submarine, destroyer];

  return fleet;
}