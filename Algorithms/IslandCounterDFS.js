var numIslands = function(grid) {
    let counter = 0;
    for (let i = 0; i < grid.length; i+= 1){
        for (let j = 0; j < grid[i].length; j+=1){
            if (grid[i][j] === '1') {
                counter++
                dfs(grid,i,j)
            }
        }
    }
    
    return counter;
};

var dfs = function(grid, i, j){
    if ((i < 0) || (j < 0) ||(i >= grid.length) ||(j >= grid[i].length) || grid[i][j] === '0'){
        return //Check to see if we went out of bounds or if we are in water [0].
    }
    grid[i][j] = '0'; //Record visited land sections. 
    dfs(grid, i + 1, j);
    dfs(grid, i - 1, j);
    dfs(grid, i , j+ 1);
    dfs(grid, i , j-1);
}
