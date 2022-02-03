var rightSideView = function(root) {
    if(!root){
        return []
    }
    
    let queue = [root]
    let result = []
    console.log("ROOT " + queue[0].val)
    while(queue.length){
        let queueLengthStored = queue.length
        result.push(queue[queue.length-1].val) //Store right most value in result.
        
        while(queueLengthStored--){
            let node = queue.shift() //Need to store queue as temporary nodes to review to push for not null values.
            if(node.left){
               queue.push(node.left)
                console.log("LEFT SIDE " + node.left.val)
              }
            if(node.right) {
               queue.push(node.right)
                console.log("RIGHT SIDE " + node.right.val)
               }
        }
    }
    return result
};
