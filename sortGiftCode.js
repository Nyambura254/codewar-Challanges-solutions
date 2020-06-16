function sortGiftCode(code) {
    var result = [];
    for (var i = 0; i < code.length; i++) {
        result.push(code.substr(i, 1));
    }
    return result.sort().join('');
}
console.log(sortGiftCode('gwqieeudnd'));

// step 2
// function sortGiftCode(code){
//     return code.split('').sort().join('');
//   }

// step 3
// const sortGiftCode = code => code.split('').sort().join('');

//step 4
// function sortGiftCode(code){
//     return code.split('').sort().toString().replace(/,/g,''); 
//   }

//step 5
// function sortGiftCode(code){
//     return [...code].sort().join``
//   }