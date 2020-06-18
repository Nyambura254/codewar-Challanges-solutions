// step 1
// domainName = url => url.replace("https://", "").replace("http://", "").replace("www.", "").split(".")[0];

//example 2
function domainName(url) {
    return url.split('/').filter(it => it.length > 0 && it.indexOf('http') === -1)[0].split('.').filter(it => it !== 'www')[0]
}

//EXAMPLE 3
function domainName(url) {
    var urlSplit = url.split("/");
    for (let i of urlSplit) {
        if (i.includes(".")) {
            var UpdatedSplit = i.split(".")
            for (let j of UpdatedSplit) {
                if (j == 'www') {
                    continue;
                }
                return j
            }
        }
    }
}