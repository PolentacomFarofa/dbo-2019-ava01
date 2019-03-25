// count.js // 0.6 pts

// 0.1 pts // easy
// input: just one letter to count
let str = 'divaloper';
let c = count(str, 'a');
console.log(c === 1);
console.assert(c === 1);
console.assert(count('banana', 'a') === 3);
console.assert(count('banana', 'b') === 1);
// case sensitive
console.assert(count('Banana', 'b') === 0);

// 0.2 pts // medium
// input: string with one, two or more letters
// must match only in sequence
str = 'informatica para internet';
c = count(str, 'in')
console.log(c === 2);
console.assert(c === 2);
console.assert(count('teclado com teclas chiclete cor azul claro', 'cl') === 4);
console.assert(count('teclado com teclas chiclete cor azul claro', 'cla') === 3);



// // 0.3 pts // hard
// // String, Number, RegExp, Math and Array methods, every built-in function not allowed
// // except Array.length, Array[index], String.length, String.charAt and String[index]
// // must match only in sequence
console.assert(count('teclado com teclas chiclete cor azul claro', 'cl') === 4);
console.assert(count('teclado com teclas chiclete cor azul claro', 'cla') === 3);
console.assert(count('teclado com teclas chiclete cor azul claro', ' ') === 6);
console.assert(count('teclado com teclas chiclete cor azul claro', '  ') === 0);
console.assert(count('um caso de teste excepcional', '') === 0);

function count(str,letter){
    cont = 0;
    strComp = '';
    for(i=0; i<=str.length-letter.length;i++){
        if(letter.length === 0)
            return 0

        for(j=0; j < letter.length;j++){
            strComp += str[j+i];
        }

        if (strComp===letter){
            cont ++;
        }

        strComp = '';
    }
    return cont;
}


str = 'Lucas'
str.slice(0,str.length) //Lucas
str.slice(1,str.length) //ucas
str.slice(2,str.length) //cas