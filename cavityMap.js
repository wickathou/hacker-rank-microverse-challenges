const arr = [
    [1,1,1,2],
    [1,9,1,2],
    [1,8,9,2],
    [1,2,3,4]
];


function cavity(grid) {

    const ans = grid.map(a=>a)
    
    // for (let k=0; k<grid.length; k++){
    //     ans.push(grid[k])
    // }
    // console.log(ans)

    for (let i = 1; i < grid.length - 1; i++) {
        for (let j = 1; j < grid[i].length - 1; j++) {
            if (grid[i][j] > grid[i + 1][j] && grid[i][j] > grid[i - 1][j] && grid[i][j] > grid[i][j + 1] && grid[i][j] > grid[i][j - 1]) {
                ans[i][j] = 'X'
            }
        }
    }
    console.log(arr)
    console.log(grid)
    console.log(ans)
    return ans
}

cavity(arr)