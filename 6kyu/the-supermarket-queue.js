// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

// input
// customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.
// output
// The function should return an integer, the total time required.


// Examples: 
queueTime([5,3,4], 1) // 12

// My solution
function queueTime(customers, tills) {
   for(i = 0; i <= customers.length; i++) {
    setTimeout(() => {
        tills -= 1
        customers.shift()
        console.log(customers,tills)
    }, customers[i] * 1000)
   }
}