const mapping = new Map();
mapping.set(0, 0)

for(let i = 0 ; i < 3; i++) {
  console.log(mapping.get(i) )
  mapping.set(i+1, mapping.get(i)+1)
}

const array = [1000];
array.push(5)
array[2] = 4
console.log(array[0] + " " + array[1] + " " + array[2])

const StructExample = {
  fruit : "apple",
  insideStructObject : true,
  number : 4
}
const structArray = [StructExample]

console.log("Struct value " + StructExample.insideStructObject)
console.log("Struct array " + structArray[0].fruit + " and " + structArray[0].number)

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
        if(left[0]<right[0]){ //Check if left is smaller than right.
           nums.push(left.shift()) //Push left left shift
           } else {
            nums.push(right.shift()) //Push the right shift
           }
    }
    return nums.concat(left.slice()).concat(right.slice()) //Concat left.right slices for our new array.
}

console.log(mergeSortCut(nums))

function value(string) {
  return string + " LAST"
}

console.log(value("FIRST"))

let windowTest = [1, 2, 3, 4, 5]
let allPairs = [];
for(let i = 0; i < windowTest.length; i++) {
  for(let j = windowTest.length-1; j > i; j--){
    allPairs.push([windowTest[i], windowTest[j]])
  }
}
console.log(allPairs)

let stringToSlice = "A1234567!"
stringToSlice1 = stringToSlice.slice(0,3)
stringToSlice2 = stringToSlice1.concat(stringToSlice)
console.log(stringToSlice2)
