// tow sum
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
  for(i = 0; i< nums.length; i++) {
    for(j = 1; j< nums.length; j++) {
      if (a[i] + a[j] === target) {
        return [i, j];
      }
    }
  }
};

let nums = [2, 7, 11, 15];
let target = 9;

twoSum(nums, target);


var twoSum = function(nums, target) {
  let newMap = new Map();
  for (i =0; i< nums.length; i++) {
      let newValue = target- nums[i];
      if(newMap.has(newValue)){
          return [newMap.get(newValue), i]
      } else {
           newMap.set(nums[i], i);
      }
  }
};

