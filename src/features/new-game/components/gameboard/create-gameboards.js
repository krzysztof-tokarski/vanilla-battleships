import { createGameboard } from './create-gameboard';
import * as globalVariables from '../../../global.variables';

export function createGameboards() {
  const humanPlayerGameboard = createGameboard(globalVariables.humanPlayerReference);
  const computerPlayerGameboard = createGameboard(globalVariables.computerPlayerReference);

  return [humanPlayerGameboard, computerPlayerGameboard];
}
