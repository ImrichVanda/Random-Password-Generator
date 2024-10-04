
function generatePassword(length,includeLowerCase, includeUpperCase, includeNumbers, includeSymbols){
    const lowerCaseChars="abcdefghijklmnopqrstivwxyz";
    const upperCaseChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars="0123456789";
    const symbolChars="!%=()_-~+#&@*";

    let allowedChars="";
    let password="";

    allowedChars+=includeLowerCase ? lowerCaseChars : "";
    allowedChars+= includeUpperCase ? upperCaseChars : "";
    allowedChars+= includeNumbers ? numberChars : "";
    allowedChars+= includeSymbols ? symbolChars : "";

    if (length <= 0){
        return `(Your password length mist be at least 4)`
    }

    if(allowedChars.length === 0){
        return `(At least 1 set of character needs to be selected)`
    }

    for(let i=0; i<length; i++){
        const randomIndex= Math.floor(Math.random()*allowedChars.length);
        password+=allowedChars[randomIndex];
    }

    return password;
}

const pwdLength= 12;
const includeLowerCase= true;
const includeUpperCase= true;
const includeNumbers= true;
const includeSymbols= true;

const password = generatePassword(pwdLength,
                                includeLowerCase,
                                includeUpperCase,
                                includeNumbers,
                                includeSymbols);

console.log(`Your generated password: ${password}`);