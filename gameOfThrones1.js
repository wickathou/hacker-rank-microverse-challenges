const arr = 'aaabbbb'

function gameOfThrones(s) {
    const w = 'abcdefghijklmnñopqrstuvwxyz'
    let count = 0;
    w.split('').forEach((comp) => {
        if (s.split('').filter((a) => a === comp).length%2!==0) {
            count++
        }
    })
    if (s.length % 2 === 0) {
        if (count>0) return 'NO'
    } else {
        if (count > 1) return 'NO'
    }
    return 'YES'

}

console.log(gameOfThrones(arr))