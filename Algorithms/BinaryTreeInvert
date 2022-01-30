var invertTree = function(root) {
    if(root === null) {
        return root
    }
    
    let storage = root.left
    root.left = root.right
    root.right = storage
        
    invertTree(root.left)
    invertTree(root.right)
    
    return root
    
};
