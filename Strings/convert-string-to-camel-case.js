// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Example:
 // TheStealthWarrior

function capitalize(str) {
    // Takes the first letter of the word. Capitalzies it. Then slices the rest of the word off and add it to the capitalized letter
    return str.charAt(0).toUpperCase() + str.slice(1) 
}

function toCamelCase(str) {
  let strArray = str.split(/[-,_]/) // Using regex to use - and _ as seperators
  if(str == '') { // If there is an empty string
    return('')
  }
  
  let capitalString = []
  let firstLetter = strArray[0].charAt(0) // Grabs the first letter of the first word
  // If the first letter is equal to itself capitalized. Then run the capitilize funtion on the word then push to array. If not then just push the normal word to array.
  firstLetter == firstLetter.toUpperCase() ? capitalString.push(capitalize(strArray[0])) : capitalString.push(strArray[0])
  // This loop runs for the second word and onward. simply runs the capitalize funtion and pushes to array
  for(i = 1; i < strArray.length; i++) {
        
    capitalString.push(capitalize(strArray[i]))
  }
  // Return joined array of capitalized strings
  return capitalString.join('')
}






toCamelCase('the_stealth_warrior')
