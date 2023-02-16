// Code your solution in this file!
const returnFirstTwoDrivers = function (driverArray) {
    return driverArray.slice(0,2);
};
const returnLastTwoDrivers = function (driverArray) {
    return driverArray.slice(-2);
};
function createFareMultiplier(fare) {
    return function (x) {
        return x * fare;
    }
}
function selectDifferentDrivers(array, callback) {
    return callback(array);

}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);


let testArr = ['Antonia', 'Nuru', 'Amari', 'Mo'];
let x = returnFirstTwoDrivers(testArr);
let y = returnLastTwoDrivers(testArr);
console.log(x);
console.log(y);
console.log(fareDoubler(20));



