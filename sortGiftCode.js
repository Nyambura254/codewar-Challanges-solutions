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

//example 6

// function sortGiftCode(code){
//     return code.split``.sort().join``
//   }

//example 7
// sortGiftCode = c => c.split('').sort().join('');


//example 8

// function sortGiftCode(code){
//     var bits = code.split("");
//     bits.sort();
//     return bits.join("");
//   }

//example 9
/*
 ** @Desc: Reorganizes a code of letters to be alphabetical 
 ** @Param: String - Unorganized code of letters 
 ** @Return: String - Each letter specifically alphabetized
 */

// function sortGiftCode(code){
//     return code.split("").sort().join("");
//   }


//example 10

// function sortGiftCode(code){
//     var result = [];
//     for(var i=0; i< code.length;i++){
//       result.push(code.substr(i,1));
//     }
//     return result.sort().join('');
//   }


//example 11
// function sortGiftCode(code){
//     var reg= new RegExp('[^'+code+']','gi');

//     return 'abcdefghijklmnopqrstuvwxyz'.replace(reg,'');
//   }


//example 12
// function sortGiftCode(code){
//     return [...code].sort().join('');
//   }


//example 13
// function sortGiftCode(code){
//     var $array = [];
//     for (var i = 0; i < code.length; i++) {
//       $array[code.charCodeAt(i)] = code[i];
//     }
//     return $array.join('');
//   }