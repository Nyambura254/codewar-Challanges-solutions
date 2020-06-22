// Description:
// Consider a sequence u where u is defined as follows:

// The number u(0) = 1 is the first one in u.
// For each x in u, then y = 2 * x + 1 and z = 3 * x + 1 must be in u too.
// There are no other numbers in u.
// Ex: u = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, ...]

// 1 gives 3 and 4, then 3 gives 7 and 10, 4 gives 9 and 13, then 7 gives 15 and 22 and so on...

// Task:
// Given parameter n the function dbl_linear (or dblLinear...) returns the element u(n) of the ordered (with <) sequence u.

// Example:
// dbl_linear(10) should return 22

// Note:
// Focus attention on efficiency


// in simple terms,we want to get the max value with certain parameter when passed will be subtracted from it o get the next value =to output

function dblLinear(n) { // function initialization with parameter n
    let x = 1; //everything x start at 1
    let y = []; //empty array for both y and z
    let z = [];

    for (let i = 0; i < n; i++) { //set-up,comparison and change
        y.push(2 * x + 1); //if we push/add y we multiply by x[1] and increment with 1
        z.push(3 * x + 1);
        let min = Math.min(y[0], z[0]); //we set our minimum value start at [0]-index 0 for all y and z
        if (min === y[0]) x = y.shift(); //The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
        if (min === z[0]) x = z.shift();
    }
    return x;
}
console.log(dblLinear(3));