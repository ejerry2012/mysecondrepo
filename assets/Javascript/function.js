


let result = 0;

function addTwoNumber() {
let n1 = 34;
let n2 = 45;
result = n1 + n2



}

// function addTwoNumberWithParam(n1, n2) {

//     result = n1 + n2
// }

function addTwoNumberWithParam(n1 = 0,  n2 = 0) {
let result;
    result = n1 + n2

    return result;
}

function showResult() {
console.log("This is the result" , result);

}

function showResultWithParam(res) {
console.log("This is the result ", res);

}
addTwoNumber();

showResult();

let ourResult = addTwoNumberWithParam(1200, 500);

showResultWithParam(ourResult);

function whoIsBoss(name) {
if(name == "John") {
    console.log("Boss is here")
}

else {
  console.log(name, " you are not the boss");
}

}

whoIsBoss("John");


