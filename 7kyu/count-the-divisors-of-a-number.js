// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

// Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.

// PREP
// P: number, +
// R: number of divisors
// E

getDivisorsCnt(4) // 3 (1, 2, 4)

// My solution
function getDivisorsCnt(n) {
    // Variable for number of divisors
    let divisors = 0
    // loop
    for(i = 1; i <= n; i++) {
        if(Number.isInteger(n / i)) { // if n divided by i gives us an interger than add 1 to the divisors. E: 15 / 1 = 15(divisor + 1) 15 / 4 = 3.75(false)
            divisors += 1
        }
    }
    // return the amount of divsors after loop has eneded
    return divisors
}

getDivisorsCnt(30)

