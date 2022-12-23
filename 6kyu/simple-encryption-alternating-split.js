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

encrypt("31231901", 4)

function encrypt(text, n) {
    if(n < 0 || (text == '' || text == null)) {
        return false
    }


    let splitStr = text.split('')
    
    // Loop
    for(i = 0; i < n; i++) {
       let oddIndex =  []
        let evenIndex = []
        for(y = 0; y < splitStr.length; y++) {
            if(y % 2 ) {
                oddIndex.push(splitStr[y])
                }else {
                evenIndex.push(splitStr[y])
                }
        }
        let encrytedText = oddIndex.concat(evenIndex).join('')
        splitStr = encrytedText
        return encrytedText
        
    } 
}




// function decrypt(encryptedText, n) {

//     for(i = 0; i < n; i++) {
//         let oddIndex =  []
//          let evenIndex = []
//          for(y = 0; y < encryptedText.length; y++) {
//              if(y % 2 ) {
//                  evenIndex.push(splitStr[y])
//                  }else {
//                  oddIndex.push(splitStr[y])
//                  }
//          }
//          let decryptedText = oddIndex.concat(evenIndex).join('')
//          console.log(decryptedText)   
//      } 
// }

// decrypt(encrypt(text), encrypt(n))