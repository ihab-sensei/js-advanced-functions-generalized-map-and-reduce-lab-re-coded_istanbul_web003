// Add your functions here
function map(array, callbackFn) {
    const newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(callbackFn(array[i]))
        
    }
    return newArray
}
map([1, 2, 3, -9], function(a){ return -1 * a })




function reduce(array, callbackFn, startingPoint) {
    let result;
        if(startingPoint) {
            result = startingPoint
            for (let i = 0; i < array.length; i++) {
            result = callbackFn(result, array[i])
            }
        } else {
            result = array[0]
            for (let i = 1; i < array.length; i++) {
                result = callbackFn(result, array[i])
                }
        }
    
    return result
}

reduce([1,2,3], function(a,b) {
    return a * b
},0)
