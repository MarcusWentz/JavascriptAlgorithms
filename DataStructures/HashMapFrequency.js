/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const mapFrequency = new Map();
    for(let i = 0; i < (nums.length); i++) { //Record value frequency in hash map. 
        console.log(mapFrequency.get(nums[i]))
        if(mapFrequency.get(nums[i]) === undefined) {
            mapFrequency.set(nums[i], 1);
            continue;
        }        
        if(mapFrequency.get(nums[i]) == true) {
            console.log(mapFrequency.get(nums[i]))
            return true;
        }    
    }
    return false;  
};
