// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

//PREP
// P: string, url
// R: modified string with # removed
// E:

removeUrlAnchor('www.codewras.com#about') // www.codewars.com
removeUrlAnchor('www.codewars.com/katas/?page=1#about') // www.codewars.com/katas/?page=1
removeUrlAnchor('www.codewars.com/katas/') // www.codewars.come/katas/

// My solution

function removeUrlAnchor(url) {
    // console.log
        // split url into an array
            // slice the array from the start and end when there is a '#'
                // Join the array back together to create the new url string
    let urlArray = url.split('#')[0]

   return (urlArray)
    
}

