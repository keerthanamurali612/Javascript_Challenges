// Return the Remainder from Two Numbers
// There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.

function remainderTwoNumber(a,b){
    return a%b
}

const twoNumber=remainderTwoNumber(1, 3);
console.log(` the remainder of a division operation = ${twoNumber}`);