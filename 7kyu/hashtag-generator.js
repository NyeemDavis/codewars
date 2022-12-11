// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

//PREP
// P: String of words, 140 character limit
// R: String with hashtag, joined string
// E: string, boolean

function createHashtag(str) {
    // Check if string is empty or over character limit. Conditional
    if(str === '' || str.length > 140) {
        return false
    }
    // Create Hashtag
    let splitString = str.split('')
    console.log(splitString)
}

createHashtag('Hello Word')