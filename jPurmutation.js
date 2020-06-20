// This problem takes its name by arguably the most important event in the life of the ancient historian Josephus: according to his tale, he and his 40 soldiers were trapped in a cave by the Romans during a siege.

// Refusing to surrender to the enemy, they instead opted for mass suicide, with a twist: they formed a circle and proceeded to kill one man every three, until one last man was left (and that it was supposed to kill himself to end the act).

// Well, Josephus and another man were the last two and, as we now know every detail of the story, you may have correctly guessed that they didn't exactly follow through the original idea.

// You are now to create a function that returns a Josephus permutation, taking as parameters the initial array/list of items to be permuted as if they were in a circle and counted out every k places until none remained.

// Tips and notes: it helps to start counting from 1 up to n, instead of the usual range 0..n-1; k will always be >=1.

// For example, with n=7 and k=3 josephus(7,3) should act this way.

// [1,2,3,4,5,6,7] - initial sequence
// [1,2,4,5,6,7] => 3 is counted out and goes into the result [3]
// [1,2,4,5,7] => 6 is counted out and goes into the result [3,6]
// [1,4,5,7] => 2 is counted out and goes into the result [3,6,2]
// [1,4,5] => 7 is counted out and goes into the result [3,6,2,7]
// [1,4] => 5 is counted out and goes into the result [3,6,2,7,5]
// [4] => 1 is counted out and goes into the result [3,6,2,7,5,1]
// [] => 4 is counted out and goes into the result [3,6,2,7,5,1,4]
// So our final result is:

// josephus([1,2,3,4,5,6,7],3)==[3,6,2,7,5,1,4]//initial sequence

function josephus(items, k) { //function initialization with two parameters
    let count = 0; //start our count at zero
    let result = []; //empty array as our results
    while (items.length > 0) { //our array items should be greater than zero
        for (let i = 0; i < items.length; i++) { //give the set up,do the comparison and give change respectivelly
            if (++count % k === 0) { //our count start at 0,we increment it....the % is what we have in our sequence[...] and k is what we want to be sorted and that person to kill himself
                result[result.length] = items[i]; //result.length should be equal as our sequence item[i]
                items.splice(i--, 1); //splice remove the last value sorted out
            }
        }
    }
    return (result);
}
console.log(josephus([1, 2, 3, 4, 5, 6, 7], 3));

/*[1,2,4,5,6,7]=>3-----------------[3]
[1,2,4,5,6,7]=>6--------------------[3,6]
[1,2,4,5,7]=>2----------------------[3,6,2]
[1,4,5,7]=>7------------------------[3,6,2,7]
[1,4,5]=>5--------------------------[3,6,2,7,5]
[1,4]=>1--------------------------[3,6,2,7,5,1]
[4]=>4----------------------------[3,6,2,7,5,1,4]//final result on Josephus purmutation
[]*/