/*
Create a function that returns the sum of the two lowest positive 
numbers given an array of minimum 4 positive integers. No floats or 
non-positive integers will be passed.
*/
function sumTwoSmallestNumbers(numbers) { //function initialization

    //Code here
    let number = numbers.sort(function(a, b) { //sort our numbers with function method and initialize with two params
        return a - b;
    }); //*** */
    let result = 0;​ //results start at 0,numbers bellow -1 is invalid
    for (let i = 0; i < number.length; i++) { //setting up i,doing comparison,increment i
        if (i === 0) { //if i is zero,
            result += number[0]; //we increment our number at 0 index
        }
        if (i === 1) {
            result += number[1];
        }
    }
    return result;
};​
console.log(sumTwoSmallestNumbers([8, 3, 5, 1]));