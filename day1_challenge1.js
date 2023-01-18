//completed in 10 minutes...

const fizzbuzz = (n) => {
    
    //declared two variables which keeps count for 3 and 5 iterations.
    let v3=0,v5=0
    //loop for n iterations
    for(let i = 0;i<=n;i++)
    {
        //checks if number is divisible by 15
        if(v3 == 3 && v5 == 5)
        {
            v3=0
            v5=0
            console.log('FIZZBUZZ')
        }//else checks if number is divisible by 3
        else if(v3 == 3 )
        {
            v3=0;
            console.log('FIZZ')
        }//else checks if number is divisible by 5
        else if(v5 == 5)
        {
            v5=0
            console.log('BUZZ')
        }else // else print number
        {
            console.log(i)
        }    
        
        //increments v5 and v3 varibles
        v5++
        v3++
    }
}

fizzbuzz(100)
