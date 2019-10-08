const stones = 73
const inc1 = 25
const inc2 = 25


function lastStone(n, a, b) {
    const k = n - 1
    let arr = []
    let tVal = 0
    for (let i= 0; i<k+1; i++) {
        let cVal = a * (k - i) + b * (i)
        if (cVal===tVal) {
            break
        } else {
            tVal = cVal
            arr.push(cVal)
        }
    }
    return arr.sort((q,e)=> q-e)
}

console.log(lastStone(stones, inc1, inc2))