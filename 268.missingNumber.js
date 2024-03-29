/**
 * Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

Example 1:

Input: [3,0,1]
Output: 2
Example 2:

Input: [9,6,4,2,3,5,7,0,1]
Output: 8
Note:
Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?

 */


 function missingNumber(nums) {
    let expectSum = nums.length*(nums.length +1)/2
    let actSum = 0;
    for (let i =0; i <nums.length; i ++) {
        actSum += nums[i];
    }
    return expectSum - actSum;
 }