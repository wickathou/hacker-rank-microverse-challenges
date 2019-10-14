let p = 86
let d = 31
let m = 1
let s = 6317

// 86 31 1 6317

function howManyGames() {
    let spend = 0
    let count = 0
    while (s-spend >= p) {
        spend += p
        if (s-spend >= 0) {
            count++
        } else break

        if (p > m) {
            p -= d
        } else {
            p = m
        }
    }

    return count
}

console.log (howManyGames())