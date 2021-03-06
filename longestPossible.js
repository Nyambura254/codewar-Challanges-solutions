// Take 2 strings s1 and s2 including only letters from ato z.Return a new sorted string, the longest possible, containing distinct letters,

//     each taken only once - coming from s1 or s2.

function longest(s1, s2) { //function initialization with two parameters to do the comparison
    var result = ""; //string should be empty

    for (var i = 0; i < s1.length; i++) { //do the set-up,do the comparison and do the change
        if (result.indexOf(s1[i]) === -1) { //we look at the required index and start from behide
            result += s1[i]; //result increament our string1 at given index i
        }
    }

    for (var i = 0; i < s2.length; i++) { //string 2 setup,comparison and change
        if (result.indexOf(s2[i]) === -1) { //look at given index and start from behide
            result += s2[i]; //increament string2 index at a given range
        }
    }

    return result.split('').sort().join(''); //we do split to separate,sort from separated array,after that we join 
}