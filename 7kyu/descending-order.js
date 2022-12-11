// Your task is to make a function that can take any non-negative integer as an argument and 
// return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// PREP
// P: num, +
// R: num, +, descending order
// E:

descendingOrder(1743) // 7431 
descendingOrder(8932) // 9832

function descendingOrder(num) {
    // Make number a string
    num = String(num).split('')

    // returns num sorted from lowest to higest. Reverses the number. and then join the array.
    return Number(num.sort().reverse().join(''))
}

descendingOrder(1938)