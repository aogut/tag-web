import {
  SAVE_NUMBERS,
} from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {numbers}  numbers in the form of
 *                    [{numeral: numbers, unit: string, tags: [string]}]
 *
 * @return {object}    An action object with a type of SAVE_NUMBERS
 */
export function saveNumbers(numbers) {
  return {
    type: SAVE_NUMBERS,
    numbers,
  };
}
