// write a function, which takes a non - negative integer(seconds) as input and returns the time in a human - readable format(HH: MM: SS)


// example
// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999(99: 59: 59)function humanReadable(seconds) {
// figure out the conversion from seconds to hours, minutes
// the left over are seconds
// push to a string so that : are in between each H, M, S 

if (seconds < 360000) {
    var hours, minutes; //to have variables
    console.log((seconds % 3600) % 60)
        //math.floor prevents the decimal part in time..like we can't have 1/2 hr
    hours = Math.floor(seconds / 3600); //second to hrs
    minutes = Math.floor((seconds % 3600) / 60); //seconds to min
    seconds = Math.floor((seconds % 3600) % 60); //to have the second


    if (seconds.toString().length === 1) { //if length =1 our second is at zero
        seconds = "0" + seconds;
    }

    if (minutes.toString().length === 1) { //if min is 59...next second change min to hr and start at 0 min
        minutes = "0" + minutes;
    }

    if (hours.toString().length === 1) { //if min reach at 59 and next second push it to make an hr...time increament with one
        hours = "0" + hours;
    }

    return hours + ":" + minutes + ":" + seconds;

}


humanReadable(359999);