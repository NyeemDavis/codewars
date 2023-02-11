// The Hamming Distance is a measure of similarity between two strings of equal length. Complete the function so that it returns the number of positions where the input strings do not match.


// Solution
function hamming(a, b) {
    let notAMatch = 0
    let [arr1, arr2] = [a.split(''),  b.split('')]
    for(i = 0; i < arr1.length; i++) {
        if(arr1[i] != arr2[i]) notAMatch += 1
    }
    return notAMatch
}

// Examples
hamming("I like turtles","I like turkeys") // 3
