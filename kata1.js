// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Note: If the number is a multiple of both 3 and 5, only count it once.

function solution(number) { //initializations
    sum = 0; //start at zero
    for (i = 3; i < number; i++) { //set-up,comparison and change
        if (i % 3 === 0 || i % 5 === 0) { //if i is divisible by 3 or i is divisible by 5
            sum += i; //increment i
        }
    }
    return sum;
}
console.log(solution(20)); //3,5,6,9,10,12,12,18=78