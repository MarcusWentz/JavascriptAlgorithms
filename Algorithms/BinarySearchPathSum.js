let hasPathSum = function(node, sum) {
    if (!node) {
        return false;
    }
    
    if (sum == node.val && !node.left && !node.right) {
        return true;
    }
    
    return hasPathSum(node.left, sum - node.val) || hasPathSum(node.right, sum - node.val);
};
