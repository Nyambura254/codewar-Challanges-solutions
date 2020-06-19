// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github" 
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"


// kata url----https://www.codewars.com/kata/514a024011ea4fb54200004b


// // step 1
// domainName = url => url.replace("https://", "").replace("http://", "").replace("www.", "").split(".")[0];

//example 2
function domainName(url) {
    return url.split('/').filter(it => it.length > 0 && it.indexOf('http') === -1)[0].split('.').filter(it => it !== 'www')[0]
}