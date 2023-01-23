//getMax method which prints maximum value of input Array.
const getMax = (inputArray) => {

    //if array is empty, throws error.
    if (inputArray.length == 0) {
        throw new Error('Array is Empty')
    }
    //this variable store first element of array as max value initially.
    let maxNumber = inputArray[0]

    //loop through each of the elements.
    for (let index in inputArray) {

        //if element is larger than stored in maxNumber, store it in maxNumber.
        if (inputArray[index] > maxNumber) {
            maxNumber = inputArray[index]
        }
    }

    //print maximum number 
    return maxNumber
}

console.log(getMax([]))

