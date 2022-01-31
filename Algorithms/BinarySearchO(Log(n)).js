var solution = function(isBadVersion) {
    return function(n) {
        let left = 1;
        let right = n;
        while(left<=right) { //LEFT MUST GROW OUT OF 
            let middle =  Math.floor((left+right)/2) //ROUND DOWN TO THE FLOOR
             if(isBadVersion(middle)){
                right = middle - 1;
             } else {
                left = middle + 1;
             }        
        }
        return left;
    };
};
