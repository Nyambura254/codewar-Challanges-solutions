// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github" 
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"


// kata url----https://www.codewars.com/kata/514a024011ea4fb54200004b


// // step 1
// domainName = url => url.replace("https://", "").replace("http://", "").replace("www.", "").split(".")[0];

//example 2
function domainName(url) {
    url.replace("https://", "").replace("http://", "").replace("www.", "").split(".")[0];
}
console.log(domainName("http://www.zombie-bites.com"));