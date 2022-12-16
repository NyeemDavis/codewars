// 

//PREP
//P: array of strings 
//R: array, colon and space in between "1: a"
//E:

(number(['a', 'b', 'c', 'd'])) // ["1; a", '2: b', "3: c", "4: d"]

// My solution

let number = function(array) {
    // If the array is empty
    if(array == []) {
        return []
    }
    let newArr = []
    // Loop
    for(i = 0; i < array.length; i++) {
        newArr.push(`${i + 1}: ${array[i]}`)
    }
    return newArr
}

number(['a', 'b', 'c', 'd','a', 'b', 'c', 'd'])