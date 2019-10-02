// Lists through the numbers 1 to 100. Returns 'Fizz' if a number is a multiple of 3,
// 'Buzz' if it is a multiple of 5, and 'FizzBuzz' if it is a multiple of both.
def fizzbuzz(){
    // iterates through the numbers from 1 to 100
    for(n = 1; n <= 100; n++) {
        // sets conditions for non-number responses
        if (n%5 === 0 && n%3 === 0){
            console.log('FizzBuzz')
        }
        else if(n%5 === 0){
            console.log('Buzz')
        }
        else if(n%3 ===0){
            console.log('Fizz')
            // sets default action- responding with a number
        }else{
            console.log(n);
        }
    }
}
