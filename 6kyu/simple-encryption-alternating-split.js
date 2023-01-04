// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

// Examples:

// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
// Together with the encryption function, you should also implement a decryption function which reverses the process.

// If the string S is an empty value or the integer N is not positive, return the first argument without changes.


// PREP
// P: string, and number. always +
// R: string
// E:


// My solution



const encrypt = (text, n) => {
    if(n < 0 || (text == '' || text == null)) {
        return false
    }

    // turns string into array for loops
    let splitStr = text.split('')
    // Loop for amount of times user wants to encrypt
    for(i = 0; i < n; i++) {
        let oddIndex = []
        let evenIndex = []
        // Second loop, loops through string
        for(y = 0; y < splitStr.length; y++) {
            y % 2 ? oddIndex.push(splitStr[y]) : evenIndex.push(splitStr[y])
        }
        // Join the two arrays
        encryptedText = oddIndex.concat(evenIndex).join('')
        // Reset string to the new encrypted text for next loop
        splitStr = encryptedText
    } 
    console.log(encryptedText)
}

encrypt('012345', 5)

// Decrypt function
const decrypt = (encryptedText, n) => {
    if(n < 0 || (encryptedText == '' || encryptedText == null)) {
        return false
    }

    let splitStr = encryptedText.split('')
    // Loop for amount of times user wants to encrypt
    for(i = 0; i < n; i++) {
        let oddIndex = []
        let evenIndex = []
        // Second loop, loops through string
        for(y = 0; y < splitStr.length; y++) {
            y % 2 ? oddIndex.push(splitStr[y]) : evenIndex.push(splitStr[y])
        }
        // Join the two arrays
        decryptedText = evenIndex.concat(oddIndex).join('')
        // Reset string to the new encrypted text for next loop
        splitStr = encryptedText
    } 
    console.log(decryptedText)

}

// decrypt(encrypt('01234', 1), 1)
