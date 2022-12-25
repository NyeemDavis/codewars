// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
pigIt('Pig latin is so cool') // igPay atinlay siay oolcay

// My solution 

function pigIt(str) {
    let newArr = [],
    words = str.split(' ')

    // loop
    words.forEach(word => {
        let wordArray = word.split('')
        
        if(word === '!' || word == '?' || word === ".") {
            newArr.push(word)
        }else {
            wordArray.push(word[0], 'ay'), wordArray.shift()
            newArr.push(wordArray.join(''))
        }
    })
    console.log(newArr.join(' '))
}