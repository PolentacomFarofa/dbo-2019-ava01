function encrypt(str, quant) {
    let asc = "abcdefghijklmnopqrstuvwxyz";
    let ret = '';

    for (let i = 0; i < str.length; i ++) {
        let char = str[i];
        let caeser = asc.indexOf(char);
        if (caeser >= 0)
            char = asc[((caeser + quant) % 26)];
        else if(caeser > 26)
            char = asc[((caeser + quant - 26) % 26) -26];

        ret += char;

    }
    return ret;
};

function vinagrete (palavra, chave) {
    let asc = "abcdefghijklmnopqrstuvwxyz";
    let ret = '';
    for(i=0;i<palavra.length;i++){
        let mod = i%chave.length;
        ret += encrypt(palavra[i],asc.indexOf(chave[mod]))
    }
    return ret
}

console.log(vinagrete('attackatdawn','lemon')) //lxfopvefrnhr
// chave = 'thiago'
//         20-8-10-9-14 

// palavra = 'lucas lindao' i = 9 
// 9 % chave.length = 3

// encrypt('l', 20)

