"use strict";
//          100 days of coding challenge ( DAY 22 )
Object.defineProperty(exports, "__esModule", { value: true });
//   Question 01
function combineStringNumber(text, number) {
    // Now we have to join number and text
    return text + number;
}
;
console.log(combineStringNumber("Age:", 40)); //It shows combined results
//   Question 02    
function remainder(num1, num2) {
    // --Gives back the leftover of num1 divided by num2
    return num1 % num2;
}
// --Trying it with divide by 2
console.log(remainder(5, 2));
// This shows leftover 1
//   Question 03 
function checkBothTrue(val1, val2) {
    // --Only says if both val1 and val2 are true
    return val1 && val2;
}
console.log(checkBothTrue(true, false));
// --it checks two things, since one is false, the answer is false.
