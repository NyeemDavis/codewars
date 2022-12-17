// You probably know the "like" system from Facebook and other pages. People can "like" blog posts,
//  pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. 
// It must return the display text as shown in the examples:

// PREP
// P: array of names
// R: string
// E:

likes([]) // no one likes this
likes(['Nyeem', 'Heidi']) // Nyeem and Heidi like this
likes(['Nyeem', 'Heidi', 'Leon', 'Natalya']) // Nyeem and Heidi and 2 others like this

// My solution

function likes(names) {
    // your code here...
    // conditional if empty
    if(names == []) {
        return 'no one likes this'
    }
    
   let others = 0
    // loop
   for(i = 3; i < names.length; i++) {
        others += 1
   }
   if(names.length >= 4) {
    return `${names[0]} and ${names[1]} and ${others} others like this`
   }else if(names.length == 3){
        return `${names[0]}, ${names[1]} and ${names[2]} like this`
   }else {
        return `${names[0]} and ${names[1]} like this`
   }
}


likes(['Nyeem', 'Heidi', 'Leon', 'Natalya', 'Lebron'])

// Could have used switch cases
// switch(names.length){
//     case 0: return 'no one likes this'; break;
//     case 1: return names[0] + ' likes this'; break;
//     case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
//     case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
//     default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
//

