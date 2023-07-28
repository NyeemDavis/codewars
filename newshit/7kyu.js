// What time is it
// Link: https://www.codewars.com/kata/57729a09914da60e17000329
// Problem:
  // Given a time in AM/PM format, convert it into 24hr format
  // Avoid using datetime libraries

// Examples
  //getMilitaryTime('12:00:01AM'), -> '00:00:01'
  //getMilitaryTime('11:46:47PM'), -> '23:46:47')

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
    // get the time substring itself without am or pm, start at 0 and move up until we are two indexed away from the end
      // split into an array by the ":" to make 12:00:00AM -> [12, 00, 00]
  const time = input.substring(0, input.length - 2).split(':');
  // Figure out what time period we are in
    // Use substring and start two indexes from end(AM/PM will always be in those posistions)
  const timePeriod = input.substring(input.length - 2);
  // Varibales to hold hours, and the rest of the time
  let hours = '00';
  // The rest of the time not including the hours since we arent touching those
  const restOfTime = time.slice(1);
  
  // Conditional on what to do based on time period
    // If it is PM
  if(timePeriod == 'PM') {
    // 12 is the start of PM, so anything after will just be the hour added to 12
    hours = 12 + Number(time[0])
  } else {
    // Quite literally nothing is done to morning times so hours just equals the hour given
    hours = time[0]
  };
  // Special case of 12 o'clock
    // If it is 12 AM, The hour is always 00 then add rest of time
  if(time[0] == '12' && timePeriod == "AM") {
    return '00:' + restOfTime.join(':')
    // If its 12 PM, time is still 12, we do not add anything to hours, add the rest of the time after
  } else if (time[0] === '12' && timePeriod == 'PM') {
    return '12:' + restOfTime.join(':')
  };
    // Return our brand new military time
  return hours + ':' + restOfTime.join(':');    
};

console.log(`Time: ${getMilitaryTime('03:56:34PM')}`)
      

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

const totalAmountVisible = (dice, topNum) => {
    let totalDots = 0
    // Map for the total dots of each kind of dice
    const diceSides = {
        6: 21,
        8: 36,
        10: 55,
        12: 78,
        20: 210
    }
    // The oppsite number is always the total of the sides plus 1, minus the number we rolled
    const opposite = dice + 1 - topNum
    // Our total amount of dots, is the kind of dice minus the opposite number. Since that is the number face down on the table
    totalDots = diceSides[dice] - opposite
    return totalDots
}

