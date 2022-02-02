var isCousins = function(root, x, y) {
  //Create queue with root. 
  const queue = [root];
  while (queue.length) {
    //Record inner loop length before queue changes size.
    const size = queue.length;
    let foundX = false;
    let foundY = false;
    // iterate through one level
    for (let i = 0; i < size; i++) {
      //After each loop shift to the left to overwrite data. 
      const node = queue.shift();
      // check if children are x and y
      if (node.left && node.right) {
        if (
          (node.left.val === x && node.right.val === y) ||
          (node.left.val === y && node.right.val === x)
        )
          return false;
      }
      // find x and y at the same level
      if (node.val === x) foundX = true;
      if (node.val === y) foundY = true;
      //BFS push values on to queue that are not null. 
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    //Final check for solution. 
    if (foundX && foundY) return true;
  }
  return false;
};
