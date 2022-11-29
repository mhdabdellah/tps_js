var array = [
    { 'name': 'P1', 'mnt': 6700 },
    { 'name': 'P1', 'mnt': 1502 },
    { 'name': 'P2', 'mnt': 2006 },
    { 'name': 'P6', 'mnt': 9502 },
    { 'name': 'P8', 'mnt': 2006 },
    { 'name': 'P3', 'mnt': 4505 }
];

function sortArray(array,key,desc=false){
    console.log(array.sort(function (a,b){
        if(desc){
            return b[key] - a[key];
        }else{
            return a[key] - b[key];
        }
    }));
}

sortArray(array,'mnt')

sortArray(array,'mnt',desc=true)

// function sortArray(objet,key){
//     var result = objet.sort(function (a,b){
//         return a[key] - b[key];
//     })
//     return result;
// }
// console.log("tesultat : "+sortArray(obj,'mnt'));