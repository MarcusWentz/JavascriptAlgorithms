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
        
        dfs(node.left, level+1, diff*2);
        dfs(node.right, level+1, diff*2+1);
    }
    
    dfs(root, 0, 0);
    return maxWidth;
};
