/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const mapping = new Map();
    for(let i = 0; i < nums.length; i++) {
            let difference = target - nums[i];
            if(mapping.has(difference)) { //Did we find this difference in our hash map before?
               return [mapping.get(difference),i] //Yes, return it.
             }
            mapping.set(nums[i], i)
        }
    
};
