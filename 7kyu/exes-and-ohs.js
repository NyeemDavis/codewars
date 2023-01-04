// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false


// My solution
function XO(str) {
    //code here
    // Create variable to store number of x and number of o
    let numOfX = 0
    let numOfO = 0
    // split the string into an array 
  let strArray = str.split('')
  // Loop
  strArray.forEach(letter => {
    // if the letter in the array is an x(X) add one to numOfX, same for o
    if(letter === 'x' || letter === 'X') {
        numOfX += 1
    }else if(letter === 'o' || letter === 'O') {
        numOfO += 1 
    }
  });
  // If the number of X and Number of O are equal, return true, else return false
  if(numOfX === numOfO) {
    return true
  }else{
    return false
  }
}

XO('xXooz')