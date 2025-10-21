// #1 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Given two numbers passed to the function, return a new array of length num1 with each value num2.
// For example, thisLengthThatValue(3,5) should return [5, 5, 5]. thisLengthThatValue(2, 10) should return [10, 10].

function thisLengthThatValue(num1, num2) {
    const newArray = [];
    for (let i = 0; i < num1; i++) {
        newArray.push(num2);
    }               
    return newArray;
}

// Test Cases (5/5)
console.log(thisLengthThatValue(3,5));// to return [5,5,5]
console.log(thisLengthThatValue(2,10));// to return [10,10]
console.log(thisLengthThatValue(3,10));// to return [10,10,10]
console.log(thisLengthThatValue(1,55));// to return [55]
console.log(thisLengthThatValue(10,2));// to return [2,2,2,2,2,2,2,2,2,2]


// #2 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Build function that accepts array. Return a new array with all values except first, adding 7 to each. Do not alter the original array.
// For example, addSevenToMost([1,3,5]) should return [10, 12]. addSevenToMost([1, 3, 5, 7]) should return [10, 12, 14].

function addSevenToMost(arr) {
    const newArray = [];
    for (let i = 1; i < arr.length; i++) {
        newArray.push(arr[i] + 7);
    }   
    return newArray;
}

// Test Cases (3/3)
console.log(addSevenToMost([1,3,5]));// to return [10,12]
console.log(addSevenToMost([1,3,5,7]));// to return [10,12,14]
console.log(addSevenToMost([5,10,20]));// to return [17,27]


// #3 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Write a function that accepts any array, and returns a new array with the array values that are greater than its 2nd value. If the array that was passed to the function has less than two elements, have the function return false.

// For example, greaterThanSecond([1,3,5,7]) should return [5, 7]. Similarly, greaterThanSecond([0, -3, 2, 5]) should return [0, 2, 5]. Also, greaterThanSecond([2]) should return false.

function greaterThanSecond(arr) {
    if (arr.length < 2) return false;
    const second = arr[1];
    const newArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > second) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
}        

// Test Cases (5/5)
console.log(greaterThanSecond([1, 3, 5, 7]));// to return [5,7]
console.log(greaterThanSecond([0, -3, 2, 5]));// to return [0,2,5]
console.log(greaterThanSecond([2]));// to return false
console.log(greaterThanSecond([]));// to return false
console.log(greaterThanSecond([0, 1, 2, -5]));// to return [2]

// #4 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Given an array, print/log the sum of the first value in the array, plus the array’s length. Assume that the array is composed of numbers.

function firstPlusLength(arr) {
    const sum = arr[0] + arr.length;
    console.log(sum);   
}

// Test Cases (4/4)
firstPlusLength([1,2,5]);// to log 4
firstPlusLength([3,0,2,5]);// to log 7
firstPlusLength([-5,0,2,5]);// to log -1
firstPlusLength([1]);// to log 2