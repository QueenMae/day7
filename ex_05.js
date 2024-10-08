function findClosestResult(functionsObj, inputNumber, outputNumber) {
const keys = Object.keys(functionsObj);
return keys.reduce((closestKey, key) => {
const result = functionsObj[key](inputNumber);
const difference = Math.abs(result - outputNumber);
const closestResult = functionsObj[closestKey](inputNumber);
const closestDifference = Math.abs(closestResult - outputNumber);
        
return difference < closestDifference ? key : closestKey;
 }, keys[0]);
}
const fObj = {
    multipleByEight: (x) => x * 8,
    square: (x) => x * x,
    addSixty: (x) => x + 60,
};
console.log(findClosestResult(fObj, 5, 26)); 
console.log(findClosestResult(fObj, 10, 5)); 
console.log(findClosestResult(fObj, 5, 45)); 
