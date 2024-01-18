// Coding challenge #12: Create a function that receives an array of numbers and returns an array containing only the positive numbers

function receiveArray (num){

   let  num2=[];

    for(let i=0;i<num.length;i++){

        let element=num[i];

        if(element>=0){
           num2.push(element);

        }
    }

    return num2;

}

let num=[-5, 10, -3, 12, -9, 5, 90, 0, 1];
let num2=receiveArray(num);

console.log(num2);