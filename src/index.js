const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let arr = expr.match(/.{1,2}/g);
    message = [];
    for (let i=0; i<arr.length; i++)
    {
        if (arr[i] == '00'){
            arr[i] = '';
        }
        else if (arr[i] == '10'){
            arr[i] = '.';
        }
        else if(arr[i] == '11'){
            arr[i] = '-';
        }
        else if(arr[i] == '**'){
            arr[i] = ' ';
           // arr.splice(i+1, 4);
        }
    } 
    for (let i=5; i<arr.length; i+=6)
    arr.splice(i,0," ");
    arr = arr.join("");
    console.log(arr);
    arr.split("   ").map(function (word) {
        word.split(" ").map(function (letter) {
            message.push(MORSE_TABLE[letter]);
        });
        message.push(" ");
    });
    message.pop();
    message = message.join("").replace(/\s{2,}/g, ' ');
    console.log(message+'length= '+message.length);
    return(message);
}

module.exports = {
    decode
}