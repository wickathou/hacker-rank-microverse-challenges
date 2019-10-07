const arr = [
    [1,1,1,2],
    [1,9,1,2],
    [1,8,9,2],
    [1,2,3,4]
];

/////////////////////////////////////////////////////
// Testing area

function cavity(grid) {
    // let ans = []

    // for (let k = 0; k < grid.length; k++) {

    //     ans.push(JSON.parse(JSON.stringify(grid[k])))
    // }
    const ans = JSON.parse(JSON.stringify(grid))
    console.log(ans)
    console.log(ans[1])
    
    for (let i = 1; i < grid.length - 1; i++) {
        for (let j = 1; j < grid[i].length - 1; j++) {
            if (grid[i][j] > grid[i + 1][j] && grid[i][j] > grid[i - 1][j] && grid[i][j] > grid[i][j + 1] && grid[i][j] > grid[i][j - 1]) {
                console.log(typeof (ans[i]))
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


//////////////////////////////////////////////////////////
// Actual code submitted
function hrCavity(grid) {


let ans = (JSON.parse(JSON.stringify(grid)))
console.log(ans)
for (let k = 0; k < ans.length; k++) {
    ans[k] = [...ans[k]]
}

for (let i = 1; i < grid.length - 1; i++) {
    for (let j = 1; j < grid[i].length - 1; j++) {
        if (grid[i][j] > grid[i + 1][j] && grid[i][j] > grid[i - 1][j] && grid[i][j] > grid[i][j + 1] && grid[i][j] > grid[i][j - 1]) {
            console.log(ans[i][j])
            console.log(ans[i])
            console.log(typeof (ans[i]))
            ans[i][j] = 'X'
        }
    }
}
let final = []
for (let k = 0; k < ans.length; k++) {
    final.push(ans[k].join(''))
}
console.log(ans)
return final
}

hrCavity(arr)
