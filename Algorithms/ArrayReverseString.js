var reverseString = function(s) {
    if(!s) {
       return []
     }
     if(s.length == 1) {
       return s
     }
    
    let stringStore; 
    
    for(let i = 0; i < (s.length)/2 ; i++) {
        stringStore = s[i]
        s[i] = s[(s.length - 1) -i]
        s[(s.length - 1)-i] = stringStore   
    }
    return s
};
