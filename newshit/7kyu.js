// What time is it
// Link: https://www.codewars.com/kata/57729a09914da60e17000329
// Problem:
  // Given a time in AM/PM format, convert it into 24hr format
  // Avoid using datetime libraries

// Examples
  //getMilitaryTime('12:00:01AM'), '00:00:01'
  //getMilitaryTime('11:46:47PM'), '23:46:47')

// Notes
  // Only thing changing, is the hours
  // 12 am and 1 am are the only morning times to be touched
  // Return value wont have AM or PM at the end
// Psuedocode
    // Get time into an array without the time period
    // Figure out what time period we are in
    // Varibales to hold hours, and the rest of the time
    // Conditional on what to do based on time period
    // Special case of 12 o'clock
    // Return the hours + the rest of the time
    const getMilitaryTime = (input) => {
        // Get time into an array without the time period
        const time = input.substring(0, input.length - 2).split(':');
        // Figure out what time period we are in
        const timePeriod = input.substring(input.length - 2);
        // Varibales to hold hours, and the rest of the time
        let hours = '00';
        const restOfTime = time.slice(1);
        
        // Conditional on what to do based on time period
        if(timePeriod == 'PM') {
          // 12 is the start of PM, so anything after will just be 12 + the hour
          hours = 12 + Number(time[0])
        } else {
          // It is AM so just make the hours the same
          hours = time[0]
        };
        // Special case of 12 o'clock
        if(time[0] == '12' && timePeriod == "AM") {
          return '00:' + restOfTime.join(':')
        } else if (time[0] === '12' && timePeriod == 'PM') {
          return '12:' + restOfTime.join(':')
        };
          // Return the hours + the rest of the time
        return hours + ':' + restOfTime.join(':');
      }
      

// Visible dots on a die
// Link: https://www.codewars.com/kata/5a39724945ddce2223000800
// Problem:
    // Rolling a dice, count the number of visible dots
    // Possible dice inputs are 6,8,10,12,20
    // topNum is the number on the top of the dice, number rolled

//Notes:
    // 6 sided dice has 21 visible dots
    // 8 sided dice has 27 visible dots
    // 10 sided dice has 31 visible dots
    // 12 sided dice has 35 visible dots
    // 20 sided dice has 51 visible dots
// Examples
    //totalAmountVisible(6, 1), 20
    //totalAmountVisible(8, 2), 24
    //totalAmountVisible(10, 3), 28
// Psuedocode:
    // Create a switch statement for each dice
    // Create a variable to hold the total amount of visible dots
    // Create a variable to hold the amount of dots on the top of the dice
    // Subtract the topNum from the total amount of dots

const totalAmountVisible = (topNum, dice) => {
    let totalDots = 0
    const diceSides = {
        6: 21,
        8: 36,
        10: 55,
        12: 78,
        20: 210
    }
    const opposite = dice + 1 - topNum
    totalDots = diceSides[dice] - opposite
    return totalDots
}
console.log(totalAmountVisible(6, 1))
