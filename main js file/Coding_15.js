// Return the First Element in an Array
// Create a function that takes an array containing only numbers and return the first element.

function getFirstElement(arr){

    
   let firstElement = arr.shift();

    return firstElement;

    
}

const myArray1=[-500, 0, 50];
const firstElement=getFirstElement(myArray1);
console.log(`The first element in an array always has an index of 0 = ${firstElement}`);


