// Array with numbers, have to find the odd one out of the numbers

const finqUniq = arr =>  {
    let obj = {}

    for(i = 0; i < arr.length; i++) {
        if(obj[arr[i]]) {
            obj[arr[i]]++
        }else {
            obj[arr[i]] = 1
        }
    }
   for([key, value] of Object.entries(obj)) {
    if(value == 1) {
        return Number(key)
    }
   }
}

finqUniq([1, 1, 1, 2, 1, 1]) // 2
