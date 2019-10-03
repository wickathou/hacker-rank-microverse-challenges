const n = 6
const c = 2
const m = 2

const choco = () => {
    let bars = Math.floor(n / c)
    const wrappers = (w)=> Math.floor(w / m)
    let leftWrappers = bars
    let count = bars;
    while (leftWrappers>=m){
        count += wrappers(leftWrappers)
        leftWrappers = wrappers(leftWrappers) + leftWrappers%m
    }

    return count;

    }

console.log(choco())