let LeafArray = []

var invertTree = function(root) {
    if(root === null) {
        return null
    }
    
    if(!root.left || !root.right){ //Print leaf [meaning left or right for node is null]
        LeafArray.push(root.val)
        if(!root.left) {
                console.log(LeafArray)
           }
    }
        
    invertTree(root.left)
    invertTree(root.right)
        
};
