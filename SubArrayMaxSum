/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if(nums.length == 0) {
        return 0;
    }
    
    let CurrentSum = nums[0];
    let MaxSum = nums[0];
     
    //Assume that the first biggest starting point is the best.
    for(let i = 1; i < nums.length; i++) {
        CurrentSum = Math.max(nums[i], nums[i] + CurrentSum )
        if(CurrentSum > MaxSum){
           MaxSum = CurrentSum;
         }
    }
    return MaxSum;
};
