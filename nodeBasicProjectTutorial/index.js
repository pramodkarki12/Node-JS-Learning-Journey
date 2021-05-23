/*
Three type of modules : 
1. File Based Modules
2. Core Modules / BuiltIn Modules
3. Third Party module, NPM(Node Package Manager)
*/

// 1. File Based Modules
// const square = {
//     area : (a) => (a * a), 
//     perimeter : (a) => (4 * a)
// }

// importing the square.js module or file 
const square = require('./square.js');

const calSquare = (a) => {
    console.log(`The value of a is : ${a}`);
    console.log(`The area of square is : ${square.area(a)}`);
    console.log(`The perimeter of square is : ${square.perimeter(a)}`);
    
}

calSquare(5);