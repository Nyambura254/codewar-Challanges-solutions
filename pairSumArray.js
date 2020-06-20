// Given a sequence of numbers, find the largest pair sum in the sequence.

// For example

// [10, 14, 2, 23, 19] --> 42 (i.e. sum of 23 and 19)
// [99, 2, 2, 23, 19]  --> 122 (i.e. sum of 99 and 23)
// Input sequence contains minimum two elements and every element is an integer.

function largestPairSum(numbers) { //initialization
    numbers.sort(function(a, b) { //sort from two 
        if (a > b) { //set a to be greater than b
            return -1;
        }
        if (b > a) {
            return 1;
        }
        return 0;
    });
    return numbers[0] + numbers[1]; //add the selected value to give largest output

}
console.log(largestPairSum([-10, -8, -16, -18, -19])); //in this case the answer should be -18