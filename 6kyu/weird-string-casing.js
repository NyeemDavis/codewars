// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, 
// and returns the same string with all even indexed characters in each word upper cased, 
// and all odd indexed characters in each word lower cased. The indexing just explained is 
// zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

// The passed in string will only consist of alphabetical characters and spaces(' '). 
// Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

// Cases

// one word
// toWeirdCase('String') // StRiNg

// multiple word
toWeirdCase('Weird string case') // WeIrD StRiNG CaSe


// My solution

function toWeirdCase(string) {
    let wordArray = string.split(' ')
    let weirdStringCasing = []
    //
    wordArray.forEach(word => {
        let letterUrl = word.split('')
    
       for(i = 0; i < letterUrl.length; i++) {
        if(i % 2 == 0 || i == 0) {
            letterUrl[i].toUpperCase()
        }else {   
            letterUrl[i].toLowerCase()
        }
       }
       console.log(letterUrl)
    })
}