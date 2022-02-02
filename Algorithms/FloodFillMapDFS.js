function floodFill(image, sr, sc, newColor) {
    if(!image || image.length == 1 || image[sr][sc] == newColor) { //If no image, 1 pixel or new color, no dfs needed.
        return image
    }
    const start = image[sr][sc]
    function dfs(image, r, c, newColor,start){ //dfs for more complex image. 
            console.log(r, c)
        if(r < 0 || r >= image.length || c < 0 || c > image[0].length || start != image[r][c] ){ //Base case:
           return  // r and c cannot be above or below coordinates. We identify start when color is original.
        }
        
        image[r][c] = newColor; //If a valid new coordinate, change coordinate new color value.
        
        dfs(image, r, c-1, newColor,start) //Keep doing the dfs until we can't move anymore. 
        dfs(image, r, c+1, newColor,start)
        dfs(image, r-1, c, newColor,start)
        dfs(image, r+1, c, newColor,start)
    }
    
    dfs(image, sr, sc, newColor,start)
    return image
};
