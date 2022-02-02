var generateParenthesis = function(n) {
    
    arrayAllSubStrings = []
    
    function dfs(leftBrackets,rightBrackets,subString) {
        if(leftBrackets>rightBrackets){
           return 
           }
        if(!leftBrackets && !rightBrackets){
           arrayAllSubStrings.push(subString)
           }
        if(leftBrackets>0){
           dfs(leftBrackets-1,rightBrackets,subString + "(")
           }
        if(rightBrackets>0){
           dfs(leftBrackets,rightBrackets-1,subString + ")")
           }    
    }
    
    dfs(n,n,"")
    return arrayAllSubStrings
    
};
