// _.compact(array)
// Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.

// 
// Crée un tableau avec toutes les valeurs fausses supprimées. Les valeurs false, null, 0, "", undefined et NaN sont fausses.

/**
 * Arguments
array (Array): The array to compact.
Returns
(Array): Returns the new array of filtered values.
 */
_.compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]

// _.concat(array, [values])
// Creates a new array concatenating array with any additional arrays and/or values.
/**
 * 
 * Arguments
array (Array): The array to concatenate.
[values] (...*): The values to concatenate.
Returns
(Array): Returns the new concatenated array.
 */

var array = [1];
var other = _.concat(array, 2, [3], [[4]]);
 
console.log(other);
// => [1, 2, 3, [4]]
 
console.log(array);
// => [1]

// _.drop(array, [n=1])
// Creates a slice of array with n elements dropped from the beginning.
/**
 * Arguments
array (Array): The array to query.
[n=1] (number): The number of elements to drop.
Returns
(Array): Returns the slice of array.
 */

_.drop([1, 2, 3]);
// => [2, 3]
 
_.drop([1, 2, 3], 2);
// => [3]
 
_.drop([1, 2, 3], 5);
// => []
 
_.drop([1, 2, 3], 0);
// => [1, 2, 3]

// _.dropRight(array, [n=1])
// Creates a slice of array with n elements dropped from the end.

/**
 * 
 * Arguments
array (Array): The array to query.
[n=1] (number): The number of elements to drop.
Returns
(Array): Returns the slice of array.
 */

_.dropRight([1, 2, 3]);
// => [1, 2]
 
_.dropRight([1, 2, 3], 2);
// => [1]
 
_.dropRight([1, 2, 3], 5);
// => []
 
_.dropRight([1, 2, 3], 0);
// => [1, 2, 3]

// _.dropRightWhile(array, [predicate=_.identity])

// Creates a slice of array excluding elements dropped from the end. Elements are dropped until predicate returns falsey. The predicate is invoked with three arguments: (value, index, array).

/**
 * Arguments
array (Array): The array to query.
[predicate=_.identity] (Function): The function invoked per iteration.
Returns
(Array): Returns the slice of array.
 */

var users = [
    { 'user': 'barney',  'active': true },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': false }
  ];
   
  _.dropRightWhile(users, function(o) { return !o.active; });
  // => objects for ['barney']
   
  // The `_.matches` iteratee shorthand.
  _.dropRightWhile(users, { 'user': 'pebbles', 'active': false });
  // => objects for ['barney', 'fred']
   
  // The `_.matchesProperty` iteratee shorthand.
  _.dropRightWhile(users, ['active', false]);
  // => objects for ['barney']
   
  // The `_.property` iteratee shorthand.
  _.dropRightWhile(users, 'active');
  // => objects for ['barney', 'fred', 'pebbles']

//   _.dropWhile(array, [predicate=_.identity])