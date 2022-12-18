// In a small town the population is p0 = 1000 at the beginning of a year. 
// The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. 
// How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

// At the end of the first year there will be: 
// 1000 + 1000 * 0.02 + 50 => 1070 inhabitants

// At the end of the 2nd year there will be: 
// 1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

// At the end of the 3rd year there will be:
// 1141 + 1141 * 0.02 + 50 => 1213

// It will need 3 entire years.
// More generally given parameters:

// p0, percent, aug (inhabitants coming or leaving each year), p (population to equal or surpass)

// the function nb_year should return n number of entire years needed to get a population greater or equal to p.

// aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

// PREP
// P: parameter taking integers, +, percentage
// R: number, +
// E:


nbYear(1500, 5, 100, 5000); // 15


// My previous solution

function nbYear(p0, percent, aug, p) {
    // your code
  let goal = 1200, years = 0 // set goal variable 
  // loop
  while(p0 < goal) { // while current population is lower than the goal
     let newp0 = p0 * 0.02 + 50 // set new population, doing the math for a new year
     p0 = newp0 // set original population variable to the new year
    console.log(p0)
    years += 1 // after doing math, add 1 to the year variable
  }
  console.log(years) // return the amount of years
}

// My new solution

function nbYear(p0, percent, aug, p) {
    // declare years var
    let years = 0
    // loop
    while(p0 < p) {
        p0 = p0 * percent + aug
        years += 1
        console.log(years)
    }
}