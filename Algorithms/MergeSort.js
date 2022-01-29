const nums = [5,3,9,10,6]
function mergeSortCut(nums) {
if(nums.length == 1){
   return nums;
 }
    const middle = Math.floor(nums.length/2)
    const left = nums.slice(0,middle)
    const right = nums.slice(middle)
    return mergeSortAdjust((mergeSortCut(left)) ,(mergeSortCut(right) ) ) //Ask the Adjust to sor the mergeSortCut left right calls.
}

function mergeSortAdjust(left, right) {
    const nums = []; //Need to keep new values stored in an array.
    while(left.length && right.length) { //Stop moving until slices are 0.
        if(left[0]<right[0]){
           nums.push(left.shift()) //Push left small value left
           } else {
            nums.push(right.shift()) //Push left large value right
           }
    }
    return nums.concat(left.slice()).concat(right.slice()) //Concat left.right slices for our new array.
}

console.log(mergeSortCut(nums))
