/**
 *  Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 * Example:

    Input: [0,1,0,3,12]
    Output: [1,3,12,0,0]
    Note:
    You must do this in-place without making a copy of the array.
    Minimize the total number of operations.
 * 
 * */


// function moveZero1(arr) {
//     if (!arr.length) return;
//     if (arr.length > 0) {
//         let arrLength = arr.length;
//         for (let i = 0; i < arrLength; i++) {
//             if(arr[i] < arr[i+arrLength -1] && (arr[i] !== 0 && arr[i+arrLength -1] !==0)){
//                 let temp = arr[i];
//                 arr[i] = arr[i+arrLength -1];
//                 arr[i+arrLength -1] = temp;
//             }
//         }
//     }
// }

function moveZeroes2(nums) {
    for(let i = nums.length-1; i >= 0; i--){
    if(nums[i] === 0) nums.push(nums.splice(i,1))
    }
    };
//console.log(moveZero1([0,1,0,3,12]));
console.log(moveZeroes2([0,1,0,3,12]));