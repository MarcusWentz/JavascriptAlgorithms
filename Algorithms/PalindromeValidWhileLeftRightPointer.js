function isPalindrome(s) {
    if(s.length == 0 || s.length == 1){
       return true
       }
    let filterArray = []
    for(let i = 0; i < s.length; i++){
        if(s[i] != " " && s[i] != "," && s[i] != "!" && s[i] != ":" && s[i] != "." && s[i] != "@" ) {
           filterArray.push(s[i].toLowerCase() );
           }
    }
    
    console.log(filterArray) //.toLowercase()
    
    let leftPointer = 0
    let rightPointer = filterArray.length-1
    while(leftPointer < rightPointer) {
        console.log(filterArray[leftPointer],  filterArray[rightPointer])
        if(filterArray[leftPointer] != filterArray[rightPointer]) {
           return false
           }
        leftPointer++;
        rightPointer--;
    }
    
    return true
};
