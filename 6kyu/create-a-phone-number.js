// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!

// PREP
// P: list of numbers, array
// R: numbers as a string in a phone number format (###) ###-###
// E:



// My solution
function createPhoneNumber(numbers) {
    let stringNumbers  = numbers.toString().split('')
    console.log(`(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`)
}

createPhoneNumber([1,2,3,4,5,6,7,8,9,0]) // (123) 456,7890

// Simpler solution 
function createPhoneNumber(numbers) {
    let format = ('(xxx) xxx-xxxx')

    for(i = 0; i < numbers.length; i++) {
        format = format.replace('x', numbers[i]);
    }
    console.log(format)
}