// step 1
// domainName = url => url.replace("https://", "").replace("http://", "").replace("www.", "").split(".")[0];

//example 2
function domainName(url) {
    return url.split('/').filter(it => it.length > 0 && it.indexOf('http') === -1)[0].split('.').filter(it => it !== 'www')[0]
}