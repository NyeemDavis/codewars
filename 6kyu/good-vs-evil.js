// Description
// Middle Earth is about to go to war. The forces of good will have many battles with the forces of evil. 
// Different races will certainly be involved. Each race has a certain worth when battling against others. 
// On the side of good we have the following races, with their associated worth:

// Hobbits: 1
// Men: 2
// Elves: 3
// Dwarves: 3
// Eagles: 4
// Wizards: 10
// On the side of evil we have:

// Orcs: 1
// Men: 2
// Wargs: 2
// Goblins: 2
// Uruk Hai: 3
// Trolls: 5
// Wizards: 10
// Although weather, location, supplies and valor play a part in any battle, 
// if you add up the worth of the side of good and compare it with the worth of the side of evil, the side with the larger worth will tend to win.

// Thus, given the count of each of the races on the side of good, followed by the count of each of the races on the side of evil, determine which side wins.

// Input:
// The function will be given two parameters. Each parameter will be a string of 
// multiple integers separated by a single space. Each string will contain the count of each race on the side of good and evil.

// The first parameter will contain the count of each race on the side of good in the following order:

// Hobbits, Men, Elves, Dwarves, Eagles, Wizards.
// The second parameter will contain the count of each race on the side of evil in the following order:

// Orcs, Men, Wargs, Goblins, Uruk Hai, Trolls, Wizards.
// All values are non-negative integers. The resulting sum of the worth for each side will not exceed the limit of a 32-bit integer.

// PREP 
// P: two params, strings of intergers, always +
// R: string
// E:

goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1') // Battle result: Evil eradicates all traces of good
goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0') // Battle result: Good trumphs over evil 

// My solution

function goodVsEvil(good, evil) {
    // Get total from both lists
    let goodTotal = good.split(' ').map(num => Number(num)).reduce((a,c) => a + c)
    let evilTotal = evil.split(' ').map(num => Number(num)).reduce((a,c) => a + c)
    // Compare totals
    return goodTotal > evilTotal ? 'Battle result: Evil eradicates all traces of good' 
        : goodTotal == evilTotal ? 'Battle Result: No victor on this battle field'
        : 'Battle result: Good trumphs over evil'
}

goodVsEvil('1 1 1 1 1 1 1', "1 1 1 1 1 1 1")


// Get total sum of both lists

    // let goodTotalNum = []
    // let goodTotal  = good.split(' ')
    // goodTotal.forEach(num => {
    //     goodTotalNum.push(Number(num))
    // });
    // console.log( goodTotalNum.reduce((a,c) => a + c))
    
    // let evilTotalNum = []
    // let evilTotal = evil.split(' ')
    // evilTotal.forEach(num => {
    //     evilTotalNum.push(Number(num))
    // })
    // return goodTotalNum.reduce((a,c) => a + c) > evilTotalNum.reduce((a,c) => a + c) ? 'Good triumphs over bad' : 'Bad obliterates good'