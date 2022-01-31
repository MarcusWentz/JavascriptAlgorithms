var levelOrder = function(root) {
    if(!root){
       return []
       }

    const queue = [root] //We will can the root via the queue's storage.
    const result = [] //We will store sub arrays pushed from the queue
    
    while(queue.length) {
        let queueLengthStorage = queue.length
        result.push(queue.map(node => node.val)) //Use the queue to push whatever sub array node values into result. 
        
        while(queueLengthStorage--) { 
            let node = queue.shift() //We return the shifted out levels into the current node. Then push into 
            if(node.left) { //Only push in queue left and right nodes in if they are not null. 
                queue.push(node.left)
            }
            if(node.right) {
                queue.push(node.right)
            }
        }
    }
    return result
      
};
