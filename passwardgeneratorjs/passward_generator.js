function generatePassword(length) {
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';

    const allChars = lowercaseChars + uppercaseChars + numberChars + specialChars;
    let password = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars.charAt(randomIndex);
    }

    return password;
}

const passwordLength = parseInt(prompt('Enter the desired password length:'));
if (isNaN(passwordLength) || passwordLength <= 0) {
    console.log('Please enter a valid password length.');
} else {
    const newPassword = generatePassword(passwordLength);
    console.log('Generated Password:', newPassword);
}
