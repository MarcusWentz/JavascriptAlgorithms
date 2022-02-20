/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length != t.length){
        console.log("NOT EQUAL")
       return false;
    }
    
    let mapping = new Map();
    
    for(let i = 0 ; i < s.length ; i++){
        if(mapping.get(s[i]) === undefined) {
            mapping.set(s[i], 1)
            continue;
        }
        mapping.set(s[i], (mapping.get(s[i])+1) );
    }
    
    for(let i = 0 ; i < t.length ; i++){
        console.log(t[i])
        if(mapping.has(t[i]) && mapping.get(t[i]) > 0){
           mapping.set(t[i],  (mapping.get(t[i])-1)  )
           console.log(mapping.get(t[i]))
           }
        else{
            return false;
        }
    }
    return true;
};
