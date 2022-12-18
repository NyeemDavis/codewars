// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// PREP
// P: array, strings
// R: sorted array, string
// E:

sortStrings(["Telescopes", "Glasses", "Eyes", "Monocles"]) // 'Eyes', 'Glasses', 'Monocles', 'Telescopes'

// My solution

function sortStrings(array) {
    return array.sort((a , b) => a.length - b.length)
}

sortStrings(["Telescopes", "Glasses", "Eyes", "Monocles"])