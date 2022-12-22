// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.


// My solution 
function sortArray(array) {
    // Filter any numbers that return a remainder, then sort that new array
    const odds = array.filter((num) => num % 2).sort((a,b) => a -b)
    console.log(odds)
    console.log(array.map((num) => num % 2 ? odds.shift() : num))
    console.log(odds)
}

sortArray([5,8,6,3,4])