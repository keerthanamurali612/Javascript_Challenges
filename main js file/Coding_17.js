// Find the Perimeter of a Rectangle
// Create a function that takes length and width and finds the perimeter of a rectangle.

function findPerimeter(length,width){

    perimeter=(length+width)*2;

    return perimeter;

}

const perimeterRect=findPerimeter(20,10);
console.log(`The perimeter of a rectangle=${perimeterRect}` );