// Mr. Scrooge has a sum of money 'P' that he wants to invest. Before he does, he wants to know how many years 'Y' this sum 'P' has to be kept in the bank in order for it to amount to a desired sum of money 'D'.

// The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. After paying taxes 'T' for the year the new sum is re-invested.

// Note to Tax: not the invested principal is taxed, but only the year's accrued interest


// PREP
// P: numbers, float and interger
// R:
// E:

calculateYears(1000,0.01625,0.18,1200) // 3


// My solution
function calculateYears(principal, interest, tax, desired) {
    let years = 0
    // Calc interest before and after tax
    

    // Loop 
    while(principal <= desired) {
        // Current princial and year
        principal=principal+((principal*interest)-(principal*interest*tax))
        years += 1
    }
    console.log(years)
    
}

// function calculateYears(principal, interest, tax, desired) {
//     let year=0;
//     while (principal<desired){year++; principal=principal+((principal*interest)-(principal*interest*tax))}
//     console.log(year)
//  }