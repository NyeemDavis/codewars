// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

// PREP
// P: string
// R: string, wihtout vowels. Y is not counted as a vowel
// E:

disemvowel('This website is for losers LOL!') // T Ths wbst s fr lsrs LL!


// My solution

function disemvowel(str) {
    // Array of vowels
    let vowels = ['a', 'e', 'i', 'o', 'u']
    // Turn string into an array
    let splitString = str.split('')
    console.log(splitString)
}

