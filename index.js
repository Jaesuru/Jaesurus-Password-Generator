function generatePassword() {
    const passwordLength = document.getElementById("minLabel").value;
    const includeLowercase = document.getElementById("incLow").checked;
    const includeUppercase = document.getElementById("incUp").checked;
    const includeNumbers = document.getElementById("incNum").checked;
    const includeSymbols = document.getElementById("incSym").checked;

    let result = document.getElementById("result");

    function createPassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
        const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
        const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const numberChars = "0123456789";
        const symbolChars = "!@#$%^&*()_+";

        let allowedChars = "";
        let password = "";

        allowedChars += includeLowercase ? lowercaseChars : "";
        allowedChars += includeUppercase ? uppercaseChars : "";
        allowedChars += includeNumbers ? numberChars : "";
        allowedChars += includeSymbols ? symbolChars : "";

        if (length <= 0) {
            return `(Password length must be at least 1 characters long.)`
        }

        if (allowedChars.length === 0) {
            return `(At least 1 set of character needs to be selected.)`
        }

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * allowedChars.length);
            // console.log(randomIndex + ": " + allowedChars[randomIndex]);
            password += allowedChars[randomIndex];
        }


        return password;
    }

    const password = createPassword(passwordLength, 
                                    includeLowercase, 
                                    includeUppercase, 
                                    includeNumbers, 
                                    includeSymbols);

    let trollRoll = Math.floor((Math.random() * 20) + 1);

    if (trollRoll === 1) {
        result.style.color = "brown";
        result.textContent = `The machine soiled itself.`
    } else {
        result.style.color = "white";
        result.textContent = password;        
    }
}