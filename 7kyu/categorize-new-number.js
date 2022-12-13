// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// PREP
// P: list of pairs, single number in each pair, age, and handicap
// R: 'Open' or 'Senior' based on their age and handicap
// E:

openOrSenior([45, 12],[55,21],[19, -2],[104, 20]) // ['Open', 'Senior', 'Open', 'Senior',]

// My solution

function openOrSenior(data) {
    // ...
    let status = []
    console.log(data)
    for(array of data) {
        array[0] >= 55 && array[1] >= 7 ? status.push('Senior') : status.push('Open')
    }
    return status
}

openOrSenior([[56, 8], [45, 3]])