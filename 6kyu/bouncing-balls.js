// A child is playing with a ball on the nth floor of a tall building. The height of this floor above ground level, h, is known.

// He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

// His mother looks out of a window 1.5 meters from the ground.

// How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?

// Three conditions must be met for a valid experiment:
// Float parameter "h" in meters must be greater than 0
// Float parameter "bounce" must be greater than 0 and less than 1
// Float parameter "window" must be less than h.
// If all three conditions above are fulfilled, return a positive integer, otherwise return -1.


// PREP
// P  number, float or whole, always +
// R: number, float or whole. -1 if checks arent passed
// E:
bouncingBall(30, .66, 1.5) // 3

// My solution 

function bouncingBall(h, bounce, window) {
    // Check for everything that returns false
    if(h == 0 || (bounce >= 1) || window > h) {
        console.log(false)
    }
    // The mom will always see the ball at least(Initial fall)
    // Loop
    let seen = 1
    h = h * bounce
    while(h > window) {
        h = h * bounce
        seen += 2
    }
    return seen
}

console.log(bouncingBall(30, .66, 1.5))
