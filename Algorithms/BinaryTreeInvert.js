var invertTree = function(root) {
    if(root === null) {
        return null
    }
    
    let storage = root.left
    root.left = root.right
    root.right = storage
        
    invertTree(root.left) //Move all the way left until we hit a null.
    invertTree(root.right) //Move all the way right until we hit a null.
    
    return root
};
