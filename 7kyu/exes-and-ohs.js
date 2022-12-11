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
    let numOfX = 0
    let numOfO = 0
  let strArray = str.split('')
  strArray.forEach(letter => {
    if(letter === 'x' || letter === 'X') {
        numOfX += 1
    }else if(letter === 'o' || letter === 'O') {
        numOfO += 1 
    }
  });
  if(numOfX === numOfO) {
    return true
  }else{
    return false
  }
}

XO('xXooz')