var isSameTree = function(p, q) {
  
    function dfs(a,b){
        if(!a || !b){
           return a === b
           }
        if(a.val != b.val){
           return false 
        }
        
        return dfs(a.left,b.left) && dfs(a.right,b.right) //Is the LEFT and RIGHT side equal? 
    }
    
    return dfs(p,q)
};
