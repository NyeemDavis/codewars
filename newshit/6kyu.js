// Your order, please
// Link: https://www.codewars.com/kata/55c45be3b2079eccff00010f
// Problem:
    // Your task is to sort a given string. Each word in the string will contain a single number.
    // This number is the position the word should have in the result.
    // Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
    // If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
// Examples:
    // "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
    // "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
    // ""  -->  ""
// Psuedocode:
     // Split the string into an array by spaces to get just the words
     // Create a new array to hold the final sequence
     // Map over the array, taking the word and index as arguements
        // Create a variable to hold the number in the word
        // index = number - 1
        // return array
// Solution:
const order = (words) => {
  const orderArray = words.split(' ');
  console.log(orderArray)
  
  console.log(orderArray.map((word, index) => {
    const wordIndex = word.match(/[1-9]/g)
    orderArray[Number(wordIndex.join('')) - 1] = word
  }));

}
console.log(order('is2 Thi1s T4est 3a'))


// Bouncing Balls  
// https://www.codewars.com/kata/5544c7a5cb454edb3c000047
// Problem:
    // A child is playing with a ball on the nth floor of a tall building. The height of this floor, h, is known.
    // He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).
    // His mother looks out of a window 1.5 meters from the ground.
    // How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?

//Notes:   
    // Float parameter "h" in meters must be greater than 0
    // Float parameter "bounce" must be greater than 0 and less than 1
    // Float parameter "window" must be less than h.
    // If all three conditions above are fulfilled, return a positive integer, otherwise return -1. 
    // The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.

//Examples/Test Cases
    // h = 3, bounce = 0.66, window = 1.5, result is 3
    // h = 3, bounce = 1, window = 1.5, result is -1

//Pusedo Code:
    // if h <= 0 or (bounce > 1 and bounce < 0) or window > h return -1
    // create a variable to keep track of the number of times the ball is seen
    // while h > window
        // if h > window
            // add 1 to the seen variable
        // h = h * bounce
    // return seen
//Solution:
const bouncingBall = (h,  bounce,  window) => {
    // your code here
    if(h <= 0 || (bounce > 1 && bounce < 0) || window > h) return -1;
    let seen = 1;
    while(h > window) {
      if(h > window) {
        seen += 1
      };
      h = h * bounce
    };
    return seen
};  

// Persistance
// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec
// Problem:
    // Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence,
    // which is the number of times you must multiply the digits in num until you reach a single digit.

//Notes:


//Examples/Test Cases:
    // persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                            // and 4 has only one digit
    // persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
                            // 1*2*6 = 12, and finally 1*2 = 2
    // persistence(4) === 0 // because 4 is already a one-digit number


//Solution:
const persistence =(num) => {
    //code me
   if(num.length == 1) return num 
   let sum = parseInt(String(num).split('').reduce((a, c) => a * c))
   return persistence(sum)
 }


//ParseInt
//Problem:
    // Write a function that takes in a string of one or more words, and returns the same string,

//Notes:


//Solution:
 const parseInt = (string) => {
    let words = string.split(/\s+|\band\s/).filter(Boolean)
    console.log(words)
    number_dict = {
      'zero': 0,
      'one': 1,
      'two': 2,
      'three': 3,
      'four': 4,
      'five': 5,
      'six': 6,
      'seven': 7,
      'eight': 8,
      'nine': 9,
      'ten': 10,
      'eleven': 11,
      'twelve': 12,
      'thirteen': 13,
      'fourteen': 14,
      'fifteen': 15,
      'sixteen': 16,
      'seventeen': 17,
      'eighteen': 18,
      'nineteen': 19,
      'twenty': 20,
      'thirty': 30,
      'forty': 40,
      'fifty': 50,
      'sixty': 60,
      'seventy': 70,
      'eighty': 80,
      'ninety': 90,
      'hundred': 100,
      'thousand': 1000,
      'million': 1000000
  }

    let result = 0
    let currentNumber = 0
    let currentScale = 1
  
    for(let i = 0; i < words.length; i++) {
      if(words[i].includes('-')){
        let splitWords = words[i].split('-')
        currentNumber += compoundWords(splitWords, number_dict)
      } else {
        if(number_dict[words[i]] >= 100) {
          currentScale = number_dict[words[i]]
        } else {
          currentNumber += number_dict[words[i]]
        }
      }
      
      // If next word is a new scale factor or we are at the last word, add to the result
      if(i+1 === words.length || (number_dict[words[i+1]] && number_dict[words[i+1]] >= 100)) {
        result += currentNumber * currentScale
        currentNumber = 0
        currentScale = 1
      }
    }
    
    return result
  }



//Problem:
  // Complete the method/function so that it converts dash/underscore delimited words into camel casing.
  // The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
  // The next words should always be capitliized.


//Examples/Test Cases:
    // toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
    // toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
//Solution:
const toCamelCase = (str) => {
    if(str === '') {return str};
    let newWord = '';
    // 
    const wordArray = str.split(/[-_]/)
    wordArray.map((word, index) => {
      if(index != 0) {
        const firstLetter = word.charAt(0).toUpperCase()
        newWord += firstLetter + word.slice(1)
      } else {
        newWord += word
      }
    })
    return newWord
  };



//Find the odd int
//Link: https://www.codewars.com/kata/54da5a58ea159efa38000836
//Problem:
  // Given an array of integers, find the one that appears an odd number of times.
    // There will always be only one integer that appears an odd number of times.
//Notes:
  // integers can be negative or positive
//Examples/Test Cases:
    // findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]) // returns -1
    // findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]) // returns 5
    // findOdd([10]) // returns 10
    // findOdd([1,1,1,1,1,1,10,1,1,1,1]) // returns 10
    // findOdd([5,4,3,2,1,5,4,3,2,10,10]) // returns 1

//Pesudeo Code:
    // create an empty object
    // iterate through the array
    // if the number is in the object, add 1 to the value
    // if the number is not in the object, add it to the object with a value of 1
    // iterate through the object
    // if the value is odd, return the key
//Solution:
const findOdd = (array) =>  {
    let numObj = {};
    for(i = 0; i < array.length; i++) {
       if(numObj[array[i]]) {
        numObj[array[i]]++
      } else {
        numObj[array[i]] = 1
      }
    }
    for([key, value] of Object.entries(numObj)) {
      if(value % 2 !== 0) {
        return key
      }
    }
};



// Unique in Order
// Link: https://www.codewars.com/kata/54e6533c92449cc251001667
// Problem:
  // Implement the function unique_in_order which takes as argument a sequence and returns a list of 
  // items without any elements with the same value next to each other and preserving the original order of elements.

// Examples:
  // uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
  // uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']  
  // uniqueInOrder([1,2,2,3,3])       == [1,2,3]

// Psuedocode:
    // Split the string into an array
    // Create a new array to hold the final sequence
    // Loop through the array, taking the item and index as arguements
    // Create variables to hold next and previous index
    // If item isn't the same as the next, then add it to the finalSequence
    // Return the finalSequence
// Solution:
const uniqueInOrder = (iterable) => {
    // Split iterable if string
    if(typeof iterable == 'string') iterable = iterable.split('');
    // Create new array for final sequence
    const finalSequence = [];
    // Loop through iterable, taking the item and index as arguements
    iterable.forEach((item, index) => {
        // Create variables to hold next and previous index
        const next = index + 1
        // If item isn't the same as the next, then add it to the finalSequence
        if(item != iterable[next]) {
        finalSequence.push(item)
        }
     });
    // Does literally the same thing
    const filteredIterable = iterable.filter((item, index) => item != iterable[index + 1])
    return filteredIterable
     };


