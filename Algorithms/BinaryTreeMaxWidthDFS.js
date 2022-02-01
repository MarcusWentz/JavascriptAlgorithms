var widthOfBinaryTree = function(root) {
    const minPos = [0];
    let maxWidth = 0;
    
    function dfs(node, level, pos) {
        if(!node)  {
            return //Same as return null.
        }
        if(minPos[level] === undefined){
            minPos.push(pos)
        }        
        const diff = pos - minPos[level];
        maxWidth = Math.max(maxWidth, diff+1);
        
        dfs(node.left, level+1, diff*2); //Left location: Difference will be 1 if at least one other node exists.
        dfs(node.right, level+1, diff*2+1); //Right location: 1 to the right of left. 
    }
    
    dfs(root, 0, 0);
    return maxWidth;
};
