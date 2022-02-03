var rightSideView = function(root) {
    if(!root){
        return []
    }
    
    let queue = [root]
    let result = []
    
    while(queue.length){
        let queueLengthStored = queue.length
        result.push(queue[0].val) //Store right most value in result.
        
        while(queueLengthStored--){
            let node = queue.shift() //Need to store queue as temporary nodes to review to push for not null values.
            if(node.left){
               queue.push(node.left)
              }
            if(node.right) {
               queue.push(node.right)
               }
        }
    }
    return result
};
