/**
 * Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

Example 1:

Input: [3,2,3]
Output: 3
Example 2:

Input: [2,2,1,1,1,2,2]
Output: 2
 */


 function majorityElem() {
     var arr = [2,3,3,3,2,3,3];
     var obj = {};
     var maxNumber = arr[0];

     for(let i = 0; i <arr.length; i++) {
         let currentNumber = arr[i];
         if(obj[currentNumber]!== undefined) {
            obj[currentNumber]++; // map {key, value}
         } else {
            obj[currentNumber] = 1;
         }

         if(obj[maxNumber] < obj[currentNumber]) {
             maxNumber = currentNumber;
         }
     }
     
     if(obj[maxNumber] > arr.length/2) {
         console.log("found" + maxNumber +"keys"+ Object.keys(obj) +  "values" + Object.values(obj));
     } else {
        console.log("No majority found" + obj[maxNumber]);
     }
 }

 majorityElem();

