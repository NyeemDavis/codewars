// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:


// Number will always be whole and will alawys be greater than 0

// Examples
// expandedForm(90) // " 90 + 1 "
// expandedForm() // " 1000 + 800 + 70 + 2 " 


// My solution

function expandedForm(num) {
   let numArray = num.toString().split('')
    // For each number
   for(i = 0; i < numArray.length; i++) {
        for(j = numArray.length; j > 1; j++) {
            numArray[i] == '0' ? i++ : str[i] += 0
        }
   return numArray.filter(a => a != '0').join(' + ')
   }
}

console.log(expandedForm(70304))


// Other solutions

const expandedForm = n => n.toString()
                            .split("")
                            .reverse()
                            .map( (a, i) => a * Math.pow(10, i))
                            .filter(a => a > 0)
                            .reverse()
                            .join(" + ");

console.log(expandedForm(70304));