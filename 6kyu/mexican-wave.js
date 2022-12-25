// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. 
// You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 


// Example
mexicanWave('hello') // Hello, hEllo, heLlo, helLo, hellO

// My solution 
function mexicanWave(str) {
    let mexArray = str.split('')

    for(i = 0; i < mexArray.length; i++) {
        mexArray[i].toUpperCase()
    }
    console.log(mexArray)
}
