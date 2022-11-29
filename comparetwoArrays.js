const array1 = [1,2,3,4,5]
const array2 = [3,4,5,6,7,8,9]


function CommunsElements(array1,array2){

    // const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

    // const result = words.filter(word => word.length > 6);

    // return result = array1.filter(function (element){ 
    //     return result = array2.filter(function (elementArray2){
    //         element == elementArray2;
    //     });
    // });

    return array2.filter((obj) => array1.indexOf(obj) != -1);
}

console.log("la resultat : " +CommunsElements(array1,array2));


