"use strict";

let Numbers = []
//Prints Numbers 1-100 and stores it in the array Numbers
for(let i = 1; i <= 100; i++){
    Numbers.push(i);
}


for(let n in Numbers){
    //If the number in the array is divisible by 3 and 5, change it to 'FizzBuzz'
    if(Numbers[n] % 3 == 0 && Numbers[n] % 5 == 0){
        Numbers[n] = 'FizzBuzz'
    }

    //If the number in the array is divisible by 3, change it to 'Fizz'
    if(Numbers[n] % 3 == 0){
        Numbers[n] = 'Fizz'
    }

    //if the number in the array is divisble by 5, change it to 'Buzz'
    if(Numbers[n] % 5 == 0){
        Numbers[n] = 'Buzz'
    }

}

console.table(Numbers)