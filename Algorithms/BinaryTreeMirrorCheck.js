let isSymmetric = function(root) {
    if (root === null) { 
        return true;
    }
    return isMirror(root.left, root.right); //Pass left and right side of root. 
};

let isMirror = function(tree1, tree2) {
    if (tree1 === null || tree2 === null) { //If either root is null return its comparison. 
        return tree1 === tree2;
    }
    
    if (tree1.val !== tree2.val) { //If either tree has unequal values return false. 
        return false;
    }
    
    return isMirror(tree1.left, tree2.right) && isMirror(tree1.right, tree2.left); //Check the regular AND mirrow sides.
};
