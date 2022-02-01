var invertTree = function(root) {
    
    function dfs(root) { //Simple case where we just pass the root of the whole tree. 
        if(!root) { //Base case. 
            return //return alone is the same as return null
        }

        let storage = root.left //Logic to handle per node passed.
        root.left = root.right
        root.right = storage

        dfs(root.left)  //Pass through left branch.
        dfs(root.right) //Then pass through right branch. 
    }
    
    dfs(root)
    return root
    
};
