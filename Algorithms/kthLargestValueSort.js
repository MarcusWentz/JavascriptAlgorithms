var findKthLargest = function(nums, k) {
    nums = nums.sort(function(a,b){return(a-b)}) //Sort ascending order all in one line.
    return(nums[nums.length-k]) //Return kth value from nums length.
};
