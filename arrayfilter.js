const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log("result"+result);

function suffisammentGrand(element) {
    return element >= 10;
}
var filtre = [12, 5, 8, 130, 44].filter(suffisammentGrand);
console.log(filtre);

const result2 = words.filter(function (word){ 
    word.length > 6
});
console.log(`result2 ${result2}`);

// words.filter(word => word.length > 6).then((data)=>{console.log("data"+data)});

// using callback
function displayOnlyThen (word){ 
    word.length > 6
    showData(list)
}
function showData(list){
    console.log("list"+list);
}
words.filter(displayOnlyThen)
// words.filter(displayOnlyThen).then(showData);


