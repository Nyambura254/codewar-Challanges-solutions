// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.
'use strict'

function capitalize(s) { //initialization 
    let evenStr = ''; //we can have strings not odd....
    let oddStr = ''; //we can have strings odd....

    for (let i = 0; i < s.length; i++) { //setup,comparison,change
        if (i % 2 === 0) { //if its even
            evenStr += s[i].toUpperCase(); //increment  what we passed with [i] and return uppercase string even numbers
        } else {
            evenStr += s[i]
        }

        if (i % 2 === 1) { //if divided and has reminder
            oddStr += s[i].toUpperCase(); //increment  what we passed with [i] and return uppercase string odd numbers
        } else {
            oddStr += s[i];
        }
    }
    return [evenStr, oddStr]; //either to be returned...we should have two outputs
};
console.log(capitalize("abcdefgh")); //AbCdEfGh and aBcDeFgH