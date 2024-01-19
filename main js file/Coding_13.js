// Coding challenge #13: Find the maximum number in an array of numbers

function maxNumber(num){
    let max=num[0] // Assume the first element is the maximum

    for (let i=1;i<num.length;i++){

        if(num.length>max){

           max=num[i]; // Update max if a larger element is found
        }
    }
    return max;
}

let num=[3,5,76,23,56,89,7];
let max=maxNumber(num);
console.log(`the maximum number in an array of numbers=${max}`);