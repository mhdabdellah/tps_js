var arr1 = [1, 2, 3, 4];

arr1.map(x => [x * 2]);
// [[2], [4], [6], [8]]

arr1.flatMap(x => [x * 2]);
// [2, 4, 6, 8]

// seul un niveau est aplati
arr1.flatMap(x => [[x * 2]]);
// [[2], [4], [6], [8]]