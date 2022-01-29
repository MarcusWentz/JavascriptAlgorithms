/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let storageLeft = 0;
    let storageRight = 0;
    for(let rotations = 0 ; rotations < (k) ; rotations++) {
        for(let i = 0; i < nums.length ; i++){
            storageLeft = nums[i]
                if(i == 0) {
                    storageRight = nums[(nums.length-1)];
                 }
            nums[i] = storageRight
            storageRight = storageLeft
                    }   
        console.log(rotations)
    }   
};
