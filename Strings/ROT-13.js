// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

// Examples: 
rot13('monkey') //zbaxrl

// My solution 
function rot13(str) {
    // Create an empty string to store the result
    let result =  ''

    // Loop through each character in the string
    for(i = 0; i < str.length; i++){
        // Get the ASCII code of the character
        let charCode =  str.charCodeAt(i)
      // If the character is a letter, rotate it by 13 places
      if(charCode >= 65 && charCode <= 90) {
        charCode = (charCode - 65 + 13) % 26 + 65
      } else if(charCode >= 97 && charCode <= 122){
        charCode = (charCode - 97 + 13) % 26 + 97
      }
      // Add the rotated character to the result string
      result += String.fromCharCode(charCode)
  
    }
    // Return result
    return result
}
  // Test the function
