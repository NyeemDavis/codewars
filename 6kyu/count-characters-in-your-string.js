// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

// PREP
// P: string
// R: object, displaying how many times each character appeard in the word
// E:



// My solution
function count(string) {
    // Creates object
    const obj = {};
    // Loops through string
    for(i = 0; i < string.length; i++) {
        // adds letter from string to character variable
        const ch = string[i];
        if(!histogram[ch]) {
            histogram[ch] = 0;
        };
        histogram[ch]++;
    }
    return (histogram);
}

