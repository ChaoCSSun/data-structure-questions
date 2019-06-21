
/**
Given an array of integers, find if the array contains any duplicates.
 * 
 * Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

Example 1:

Input: [1,2,3,1]
Output: true
Example 2:

Input: [1,2,3,4]
Output: false
Example 3:

Input: [1,1,1,3,3,4,3,2,4,2]
Output: true
 */

 function containsDuplicated(params) {

     var arr = [3,3];
     var obj = {};

     for(let i = 0; i <arr.length; i++) {
         let currentNumber = arr[i];
         if(obj[currentNumber]!== undefined) {
            obj[currentNumber]++; // map {key, value}
         } else {
            obj[currentNumber] = 1;
         }

     }
     for( let value of Object.values(obj)) {
         if(value > 1) {
             return true;
         } else {
             return false;
         }
     }
 }

 containsDuplicated();

