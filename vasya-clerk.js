// The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars.

// Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

// Can Vasya sell a ticket to every person and give change if he initially has no money and sells the tickets strictly in the order people queue?

// Return YES, if Vasya can sell a ticket to every person and give change with the bills he has at hand at that moment. Otherwise return NO.
function tickets(peopleInLine) { //function initialization with ticket and peopleInLine as parameter
    let change = { //set our variable change
        "25": 0, //if 25 then no change
        "50": 0 // if second come with 50,he pass and get the ticket since vatsa has 25 to give change in the box
    }

    for (money of peopleInLine) { //loop over people in line and check the money they have 
        switch (money) {
            case 25: //if you have 25 you get the ticket since no change needed
                change["25"]++
                    break //go to next
            case 50:
                if (change["25"] > 0) {
                    change["50"]++
                        change["25"]--
                } else {
                    return "NO"
                }
                break
            case 100:
                if ((change["25"] > 0) && (change["50"] > 0)) {
                    change["25"]--
                        change["50"]--
                } else if (change["25"] >= 3) {
                    change["25"] -= 3
                } else {
                    return "NO"
                }
                break
            default:
                break
        }
    }

    return "YES"
}
console.log(tickets([25, 25, 50, 50]));

//[25][25]-> for two people
//[50][50]->each get change of [25]
//[100]-> vaysa will have two[50] notes which the third person requires [75] change//vaysa has no such change