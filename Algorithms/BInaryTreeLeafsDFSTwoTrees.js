function DFS(node) {
    if(!node){ 
        return null;
    }
    let nodeList = []
    let stack = [];
    stack.push(node);
    while(stack.length) {
        let item = stack.pop();
        if(!item.left && !item.right){
            nodeList.push(item.val);
        }
        if(item.right){
            stack.push(item.right);
        }
        if(item.left){
            stack.push(item.left);
        }
    }
    return nodeList;
}

function leafSimilar(root1, root2) {
    if(!root1 && !root2){ //Easy base cases. 
        return true;
    }
    if(!root1 || !root2) {
        return false;
    }
    return DFS(root1).toString() === DFS(root2).toString(); //DFS helper function does all the hard searching. 
};
