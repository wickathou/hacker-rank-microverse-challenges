let k = [1,2,3]
let d = [5,2,8]
let b = 10


const buyShit = (keyboards,drives,b) =>{
const kMax = Math.max(...keyboards);
const kMin = Math.min(...keyboards);
const dMax = Math.max(...drives);
const dMin = Math.min(...drives);
const max = Math.max(kMin + dMax, kMax + dMin);
const min = Math.min(kMin + dMax, kMax + dMin);

if (kMin + dMin > b) {
    return -1
} else if (max === b) {
    return max;
} else if (min === b) {
    return min;
}

let n = 0;
let count = 0;
for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
        count = drives[j] + keyboards[i];
        if (count > n && count <= b) {
            n = count
        }
    }
} return n;}

console.log (buyShit(k,d,b))