//getMax method which prints maximum value of input Array.
const getMax = (inputArray) => {

    if (inputArray.length == 0) {
        console.log('Array is Empty.')
        return
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
    console.log(maxNumber)
}

getMax([12])