// trim.js // 0.4 pts

// 0.1 pts // easy
// unrestricted
let txt = '   palavra   ';
txt = trimLeft(txt);
console.log(txt); // palavra   
console.assert(txt === 'palavra   ');
console.assert(trimLeft(' a') === 'a');
console.assert(trimLeft('                 a') === 'a');
console.assert(trimLeft('a       ') === 'a       ');
console.assert(trimLeft(' a a ') === 'a a ');
console.assert(trimLeft('     ') === '');
console.assert(trimLeft('') === '');

function trimLeft (str) {
    if(str[0] == " ") 
        str = trimLeft(str.slice(1,str.length));
    return str;
}

//----------------------------------------------------------------------------------------------------


// 0.2 pts // medium
// String, Number, RegExp, Math and Array methods, every built-in function not allowed
// except Array.length, Array[index], String.length, String.charAt and String[index]
console.assert(trimRight('   palavra   ') === '   palavra');
console.assert(trimRight('ifrs  ') === 'ifrs');
console.assert(trimRight('ifrs') === 'ifrs');
console.assert(trimRight('  ifrs') === '  ifrs');
console.assert(trimRight('  ifrs rio grande              ') === '  ifrs rio grande');
console.assert(trimRight('     ') === '');
console.assert(trimRight('') === '');

function trimRight (str) {
    ret = '';
    spliceI = 0;
    for(i = str.length-1; i > 0; i--){
        if(str[i] != " "){
            spliceI = i;
            break;
        }
    }

    if (spliceI == 0)
        return '';

    for(i = 0; i <= spliceI; i++){
        ret += str[i]
    }
    return ret;
}

// 0.1 pts // easy to do, hard to figure it out how
// String, Number, RegExp, Math and Array methods, every **built-in** function not allowed
// **in the function body**, including [index] and length operations!
// just one line of code inside the function body (one `;`).
console.assert(trim('   palavra   ') === 'palavra');
console.assert(trim('ifrs  ') === 'ifrs');
console.assert(trim('ifrs') === 'ifrs');
console.assert(trim('  ifrs') === 'ifrs');
console.assert(trim('  ifrs rio grande  ') === 'ifrs rio grande');
console.assert(trim('        ') === '');
console.assert(trim('') === '');

function trim (str) {
    return trimRight(trimLeft(str));
}