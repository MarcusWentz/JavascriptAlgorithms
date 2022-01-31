var buildTree = function(preorder, inorder) {
    if(!preorder.length || !inorder.length) { //Base case: we didn't hit a null branch on root.left or root.right.
        return null
    }
    
    let root = new TreeNode(preorder[0])
    let mid = inorder.indexOf(root.val)
    
    root.left = buildTree(preorder.slice(1,mid+1), inorder.slice(0, mid)) //Move preorder to the right and inorder to the left. 
    root.right = buildTree(preorder.slice(mid+1), inorder.slice(mid+1)) //Shift 1 past mid.
    
    return root
    
};
