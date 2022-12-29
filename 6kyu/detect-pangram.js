// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

// My solution

const isPangram = (string) => {
    // Puts entire string in uppercase then splits into an array
  let splitStr = string.toUpperCase().split("");
  // Loop
  for (let i = 65; i < 91; i++) {
    // Create a string from the charCode of 'i'. Ex: charCode(65)== a
    let charCode = String.fromCharCode(i);
    if (splitStr.includes(charCode)) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}

console.log(isPangram("Detect Pangram"));
console.log(isPangram("The quick brown fox jumps over the lazy dog"));