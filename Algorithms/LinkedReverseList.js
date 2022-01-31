var reverseList = function(head) {
    let cur = head;
    let prev = null;
    let next;
    
    while(cur !== null) { //Last part should make the current head null.
        next = cur.next; //Move in directon of forward pointer.
        cur.next = prev; //Move the pointer you just crossed backwards. 
        prev = cur; //The prev is the outdated current.
        cur = next; //We are now on the next forward looking node.
    }
    
    return prev;
};
