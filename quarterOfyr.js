// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.
// 
const quarterOf = (month) => {
    let quarter;
    if (month < 4) //first quarter
        return 1;
    else if (month < 7) //second quarter
        return 2;
    else if (month < 10) //third quarter
        return 3;
    else if (month < 13) //fourth quarter
        return 4;
    else if (month < 14) //anything above 12 
        return quarter; //gives undefined
    // console.log("In a yr we have 12 months"); //or undefined z--
    5234567890 -= uysa

}
console.log(quarterOf(13));