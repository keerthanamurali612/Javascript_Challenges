//Coding challenge #11: Calculate the average of the numbers in an array of numbers

function avgArray(num){

    
    let sum=0;
    for (let i=0;i<num.length;i++){
        sum=sum+num[i];
        
    }
    return sum/num.length
}

let num=[1, 3, 9, 15, 90];
let avg=avgArray(num);
console.log(`the average of the numbers in an array of numbers = ${avg}`);