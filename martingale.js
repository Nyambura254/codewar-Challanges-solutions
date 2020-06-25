// You're in the casino, playing Roulette, going for the "1-18" bets only and desperate to beat the house and so you want to test how effective the Martingale strategy is.

// You will be given a starting cash balance and an array of binary digits to represent a win or a loss as you play: 0 for loss and 1 for win.

// You should create a function martingale to return the balance after playing all rounds.

// You start with a stake of 100 dollars(unit of cash). If you lose a round, you lose the stake placed on that round and double the stake for your next bet. When you win, you win 100% of the stake and revert back to staking 100 dollars on your next bet.

// Example

// martingale(1000, [1, 1, 0, 0, 1]) === 1300
// you win your 1st round: gain $100, balance = 1100
// win 2nd round: gain $100, balance = 1200
// lose 3rd round: lose $100 dollars, balance = 1100
// double stake for 4th round and lost: staked $200, lose $200, balance = 900
// double stake for 5th round and won: staked $400 won $400, balance = 1300

// NOTE: Your balance is allowed to go below 0 (debt) :(


function martingale(bank, outcomes) { //function  initialization with two params.bank for money we have at the start and outcome is what we gain or loss
    let placedBet = 100; //initial starting bet money
    for (let i = 0; i < outcomes.length; i++) { //set up our initial i,do the comparison and change
        if (outcomes[i]) { //our outcome depends on what we bet{i}
            bank += placedBet; //if we win,bank money increase
            placedBet = 100; //placed amount
        } else { //what if we loss
            bank -= placedBet; //bank money reduce
            placedBet *= 2; //depending on money we have placed//might be 200
        }
    }
    return bank;
}
console.log(martingale(3000, [1, 1, 1, 0, 1]))