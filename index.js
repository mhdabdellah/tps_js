// let test1 = (... args) => {
//     console.log(args);
// }

// let test = (a ,b) => {
//     let sum = a+b;
//     console.log(sum);
//     return sum;

// }
// result = test(2,5);
// test1("test","test1",676,result);
function Ntest1(... args) {
    console.log(args);
}

function Ntest(a,b){
    let sum = a+b;
    console.log(sum);
    return sum;
}
result = Ntest(2,5);
Ntest1("Ntest","Ntest1",676,result);




// immediately invoked function
(function (num1, num2){
    var result = num1 + num2;
    console.log(result);
})(10,12);