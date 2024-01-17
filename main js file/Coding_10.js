// Coding challenge #10: Calculate the sum of numbers in an array of numbers


function array(num){
    let sum=0
    for(let i=0; i<num.length;i++){
        sum=sum+num[i]
    }

    return sum ;

}

let num=[1, 3, 9, 15, 90]
let sum=array(num)
console.log(`the sum of numbers in an array of numbers = ${sum}`)
