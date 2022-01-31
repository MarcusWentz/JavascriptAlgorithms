var hasPathSum = function(node, sum) {
    if(!node) {
        return false
    }
            
    if(!node.left && !node.right && node.val == sum) { //Make sure left and right are null. Then see node matches target.
        return true
    }
    
    return hasPathSum(node.left, sum - node.val) || hasPathSum(node.right, sum - node.val) //Search left and right
};
