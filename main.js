// DOM elements
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numberEl = document.getElementById('number');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomupper,
    number: getRandomnumber,
    Symbol: getRandomsymbol
};

// Generate event listen
generateEl.addEventListener('click', () => {
    const length = +lengthEl.value;
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numberEl.checked;
    const hasSymbol = symbolsEl.checked;

    resultEl.innerText = generatePassword(
        hasLower,
        hasUpper,
        hasNumber,
        hasSymbol,
        length
    );
});

// Copy password to clipboard
/*
clipboardEl.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const password = resultEl.innerText;

    if (!password) {
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    //document.execCommand('copy');
    navigator.clipboard.writeText(password);
    textarea.remove();
    alert('Password copied to clipboard!');
});
*/

// Generate password function
function generatePassword(lower,upper,number,Symbol,length) {

    let generatedPassword ='';

    const typesCount = lower + upper + number + symbol;

    const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter
    (
        item => Object.values(item)[0]
    );

    // console.log('typesArr:', typesArr);

    if(typesCount === 0) {
        return '';
    }

    for(let i=0;i<length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            
            generatedPassword += randomFunc[funcName]();
            
        });
    }

    const finalPassword = generatedPassword.slice(0, length);

    return finalPassword;
}
// Generator functions -https://net-comber.com/charset.html

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random()*26) + 97);
}

function getRandomupper() {
    return String.fromCharCode(Math.floor(Math.random()*26) + 65);
}

function getRandomnumber() {
    return String.fromCharCode(Math.floor(Math.random()*26) + 48);
}

function getRandomsymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.';
    return symbols[Math.floor(Math.random()* symbols.length)];
}