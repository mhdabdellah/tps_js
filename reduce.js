// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue
// );

// console.log(sumWithInitial);
// expected output: 10

// var obj = [
//     { 'name': 'P1', 'value': 150 },
//     { 'name': 'P1', 'value': 150 },
//     { 'name': 'P2', 'value': 200 },
//     { 'name': 'P3', 'value': 450 }
// ];
// var holder = {};

// obj.forEach(function(d) {
//   if (holder.hasOwnProperty(d.name)) {
//     holder[d.name] = holder[d.name] + d.value;
//   } else {
//     holder[d.name] = d.value;
//   }
// });

var obj = [
    { 'name': 'P1', 'mnt': 1500 },
    { 'name': 'P1', 'mnt': 1502 },
    { 'name': 'P2', 'mnt': 2006 },
    { 'name': 'P3', 'mnt': 4505 }
];

function sumMnt(list){
    var valeurInitiale = 0;
    var somme = list.reduce(
        (accumulateur, valeurCourante) => accumulateur + valeurCourante.value
        , valeurInitiale
    );

    console.log("somme"+somme);
    return somme
}