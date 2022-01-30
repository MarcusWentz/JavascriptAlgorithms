var hasCycle = function(head) {
    
    let turtle = head 
    let rabbit = head
    
    while(rabbit && rabbit.next) { 
            rabbit = rabbit.next.next { //Fast leads at first, jumps behind turtle with cycle pointer
            turtle = turtle.next //Turtle can catch up to rabbit with cycle pointer if it exists. 
        if(rabbit == turtle) {
            return true
         }
    }
    return false
};
