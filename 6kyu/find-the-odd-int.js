// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

//Examples
// findOdd([7]) // 7
createObj([2,5,2,6,2]) // 0

// My solution

function createObj(arr) {
    // Create object to track
    const obj = {}

    for(i = 0; i < arr.length; i++) {
         
        if(obj[arr[i]]) {
            obj[arr[i]] += 1
        }else {
            obj[arr[i]] = 1
        }       
    }

    for(let key in obj) {
        if(obj[key] % 2 == 1) {
            return Number(key)
        }
    }

    return arr[0]
}
