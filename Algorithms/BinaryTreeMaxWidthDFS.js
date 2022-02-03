function widthOfBinaryTree(root) {
    const minPos = [0];
    let maxWidth = 0;
    
    function dfs(node, level, pos) {
        if(!node)  {
            return //Same as return null.
        }
        if(minPos[level] === undefined){ //EVERY TIME WE DO A FULL DFS LEFT AND RIGHT WE GO DOWN A LEVEL. 
            minPos.push(pos)
        }        
        let diff = pos - minPos[level]; 
        maxWidth = Math.max(maxWidth, diff+1); //Add 1 since we count from 0. Width based on minPost for a level. 
        dfs(node.left, level+1, diff*2); // TREE GOES 0, 0 1, 0 1 2 3
        dfs(node.right, level+1, diff*2+1); 
    }
    
    dfs(root, 0, 0);
    return maxWidth;
};
