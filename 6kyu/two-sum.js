// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).


// PREP
// P: 
// R:
// E:



// My solution

function twoSum(numbers, target) {
    // loop
    for(i = 0; i < numbers.length; i++) {
        for(j = i + 1; j < numbers.length; j++) {
            if(numbers[i] + numbers[j] === target) {
                console.log([i, j])
            }
        }
    }
}




// Solution using a hasmap

function twoSum(numbers, target) {
    let map = {}
    //  Loop
    for(i = 0; i < numbers.length; i++) {
        let value = numbers[i]
        let complementPair = target - value;
        if(map[complementPair] !== undefined) {
            console.log([map[complementPair], i])
        }else {
            map[value] = i
        }
    }
}