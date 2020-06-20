// Given an integer as input, can you round it to the next (meaning, "higher") 5?

// Examples:
//les than -4 will be 0;
// input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.
// Input may be any positive or negative integer (including 0).

// You can assume that all inputs are valid integers.
function roundToNext5(n) { //initialization
    let x = n; //what we want to pass to be as n
    for (let i = 0; i <= 5; i++) { //set-up,comparison and change
        if (x % 5 !== 0) { //if what we pass not divisible by 5 we increament
            x++;
        } else {
            return x; //if divisible,we return what we pass
        }
    }
}
console.log(roundToNext5(-3)); //gives zero,is less than 5