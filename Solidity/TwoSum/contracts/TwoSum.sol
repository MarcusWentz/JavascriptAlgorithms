// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

contract TwoSum {

    uint[2] public answerIndexArray;
    mapping(uint => uint) differenceIndex;

    modifier validArray(uint[] memory nums) {
        require(nums[0] == 0 && nums.length >= 3, "Array input must have starting value at zero and be at least 3 elements long!");
        _;
    }

    function TwoSumFind(uint[] memory nums, uint target) public validArray(nums) { //Pad input array with 0 to handle nums[i] edge case.
        for(uint i = 1; i < nums.length; i++) {
            uint difference = target - nums[i];
            if(differenceIndex[difference] != 0) { // Mappings have default value as 0, not null.
                answerIndexArray = [differenceIndex[difference]-1,i-1]; //Remove the 0 pad at the start.
                return;
            }
            differenceIndex[nums[i]] = i; //Mappings cannot be in memory, on type storage. Therefore, we cannot mark this function with view modifier.
        }
    }
}
