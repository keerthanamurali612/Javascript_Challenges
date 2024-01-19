// Coding challenge #13: Find the maximum number in an array of numbers

function maxNumber(num){
    let max=num[0] // Assume the first element is the maximum

    for (let i=1;i<num.length;i++){

        if(num[i] >max){

           max=num[i]; // Update max if a larger element is found
        }
    }
    return max;
}

let num=[-5, 10, -3, 12, -9, 5, 90, 0, 1];
let max=maxNumber(num);
console.log(`the maximum number in an array of numbers=${max}`);