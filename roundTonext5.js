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
function roundToNext5(n) {
    let x = n;
    for (let i = 0; i <= 5; i++) {
        if (x % 5 !== 0) {
            x++;
        } else {
            return x;
        }
    }
}
console.log(roundToNext5(-3));