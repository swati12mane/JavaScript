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
    upper: getRandomUpper,
    number: getRandomNumber,
    Symbol: getRandomSymbol
};

// Clipboard.addEventListener('click', () =>{
//     const textarea = document.createElement('textarea');
//     const password = resultEl.innerText;

//     if(!password){ return;}

//     textarea.value = password;
//     document.body.appendChild(textarea);
//     textarea.select();
//     document.execCommand('copy');
//     textarea.remove();
//     alert('Password copied to clipboard');
// });

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



// Generate password function
function generatePassword(lower,upper,number,Symbol,length) {

    let generatedPassword = "";

    const typesCount = lower + upper + number + Symbol;

    const typesArr = [{ lower }, { upper }, { number }, { Symbol }].filter
    (
        item => Object.values(item)[0]
    );

    // console.log('typesArr:', typesArr);

    if(typesCount === 0) {
        return 'Select atleast 1 option';
    }

    for(let i=0;i<length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            
            generatedPassword += randomFunc[funcName]();
            
        });
    }
       console.log(generatedPassword);
    // const finalPassword = generatedPassword.slice(0, length);

    // return finalPassword;
}
// Generator functions -https://net-comber.com/charset.html

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random()*26) + 97);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random()*26) + 65);
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random()*10) + 48);
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]+<>/,.';
    return symbols[Math.floor(Math.random()* symbols.length)];
}