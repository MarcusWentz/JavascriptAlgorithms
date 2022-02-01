var sumOfLeftLeaves = function(root) {
    if(!root) {
        return null
    }
    if(root.left !== null && !root.left.left && !root.left.right) {
       return root.left.val + sumOfLeftLeaves(root.right)
    }  else {
        return sumOfLeftLeaves(root.left)+sumOfLeftLeaves(root.right) 
    }
};
