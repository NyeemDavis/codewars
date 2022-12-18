// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if 
// they consist of four octets, with values between 0 and 255, inclusive.


// PREP
// P: str, values between 0 and 255, four decimals places, leading zeroes are invalid
// R: boolean
// E:





// My solution

// CASES 
// more than or less than 4 octets
// seperated by only decimals and not non-decimal characters

// 
// Check IP
function isValidIp(str) {
    // Turn string into array 
    let octets = str.split('.') // ['34', '56', '255', '78']
    // Check how many octets
    if(octets.length !== 4) return false

    // Check if each octet is valid
        // for loop
    for(i = 1; i <= octets.length; i++) {
        if(!validateOctet(octets[i])) {
            return false
        }
    }
    return true
}


// CASES:
// numbers between 0 and 255(checked)
// numbers with leading zeros(chedked)
// octets that arent intergers(checked)


// Check octet
    // Helper function
function validateOctet(octet) {
    // Check if string contains any non-integer characters
    if(/[^0-9]/.test(octet)) return false;
    // check if there is a leading zero
    if(octet.length > 1 && octet[0] == '0') return false;

    // turn each octet into a number
    octet = Number(octet);
    // Check if number is less than zero or above 255
    if(octet < 0 || octet > 255) return false;

    return true
}

