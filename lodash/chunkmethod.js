import { } from 'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.9.1/underscore-min.js';
// import {*} from "";
//_.chunk(array, [size=1])
/* Creates an array of elements split into groups the length of size.
 If array can't be split evenly,
 the final chunk will be the remaining elements.
*/

/**
 * Crée un tableau d'éléments divisés en groupes de la longueur de size.
 *  Si le tableau ne peut pas être divisé de manière égale, 
 * le dernier morceau sera les éléments restants.
 * 
 */

/**
 * Arguments
    array (Array): The array to process.
    [size=1] (number): The length of each chunk
 *Returns
    (Array): Returns the new array of chunks.
*/
// _.chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]
 
// _.chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]

console.log(_.chunk([1, 2, 3, 4, 5, 6], 2));

