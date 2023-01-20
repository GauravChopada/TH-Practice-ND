// const inputArray = [-12, 11, -13, -5, 6, -7, 5, -3, -6]
const inputArray = [-1, -2, -3, -4]

const rearrangeNumbers = (inputArray) => {

    let pointer1 = 0, pointer2 = 1

    while (pointer2 < inputArray.length) {
        if (inputArray[pointer1] < 0) {

            pointer1++
            pointer2++
        } else if (inputArray[pointer2] >= 0) {
            pointer2++
        } else {
            inputArray.splice(pointer1, 0, inputArray[y])
            inputArray.splice(pointer2 + 1, 1)
            pointer1++;
            pointer2++;
        }

    }
    console.log(inputArray)
}

rearrangeNumbers(inputArray)