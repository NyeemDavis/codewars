// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// Examples


// Solution
let uniqueInOrder = function(iterable) {
  let array = []
  for(i = 0; i < iterable.length; i++) {
    if(iterable[i] !== iterable[i+1]) {
        array.push(iterable[i])
    }
  }
  console.log(array)
}

uniqueInOrder('AAAABBBCCDAABBB') 
uniqueInOrder([1,2,2,3,3])