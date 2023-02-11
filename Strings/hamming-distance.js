// The Hamming Distance is a measure of similarity between two strings of equal length. Complete the function so that it returns the number of positions where the input strings do not match.


// Solution
function hamming(a, b) {
    let notAMatch = 0
    // split both strings into arrays
    let [arr1, arr2] = [a.split(''),  b.split('')]
    // Loop
    for(i = 0; i < arr1.length; i++) {
        // If the letter in the first array isnt equal to the second array. Count 1 for notAMatch
        if(arr1[i] != arr2[i]) notAMatch += 1
    }
    // Return the total count
    return notAMatch
}

// Examples
hamming("I like turtles","I like turkeys") // 3
