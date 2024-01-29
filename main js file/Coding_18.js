// Multiples of 3 or 5

const multiples = num =>{
    let count=0
 for(let i=3;i<num;i++){

    if(i%3==0 && i%5==0){

        count=count+i;

    

    }


 }
 return count
    
}

console.log(multiples(-15)); 
console.log(multiples(10)); 
console.log(multiples(20)); 
console.log(multiples(200)); 
