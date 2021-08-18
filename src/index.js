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
    let arr = [];
    let str = '';
    for (let i=0;i<expr.length;i+=10) {
      arr.push(expr.substr(i, 10));
    }
    for (let j=0;j<arr.length;j++) {
      let newArrValue = '';
      for (let k=0;k<arr[j].length;k+=2) {
        if (arr[j].substr(k, 2)==10) {
          newArrValue+= '.';
        } else if (arr[j].substr(k, 2)==11) {
          newArrValue+= '-';
        }
      }
      arr[j]=MORSE_TABLE[newArrValue];
      if (arr[j]===undefined) {
        arr[j] = ' ';
      }
      str += arr[j];
    }
    
    return str;
  }

module.exports = {
    decode
}