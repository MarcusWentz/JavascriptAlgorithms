// Run in terminal "node a.js" or do Control+Shift+B
// BACKUP IDE https://www.programiz.com/javascript/online-compiler/

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
  insideStructObject : true
}
const structArray = [StructExample]

console.log("Struct value " + StructExample.insideStructObject)
console.log("Struct array " + structArray[0].fruit)
