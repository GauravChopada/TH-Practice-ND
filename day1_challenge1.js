//completed in 10 minutes + 7 minutes...

const fizzbuzz = (input) => {
    
    //declared two variables which keeps count for 3 and 5 iterations.
    let countForThree=0,countForFive=0
    
    //loop until count is not equal to input variable.
    //if input is positive integer, count will increment else it will decrement.
    for(let count = 0 ; input >= 0 ? count <= input : count >= input ; input>=0 ? count++ : count--)
    {
        //checks if number is divisible by 15
        if(countForThree == 3 && countForFive == 5)
        {
            countForThree=0
            countForFive=0
            console.log('FIZZBUZZ')
        }//else checks if number is divisible by 3
        else if(countForThree == 3 )
        {
            countForThree=0;
            console.log('FIZZ')
        }//else checks if number is divisible by 5
        else if(countForFive == 5)
        {
            countForFive=0
            console.log('BUZZ')
        }else // else print number
        {
            console.log(count)
        }    
        
        //increments countForFive and countForThree varibles
        countForFive++
        countForThree++
        
    }
}

fizzbuzz(-79)
