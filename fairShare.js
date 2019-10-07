const B = [1,2]

function fair() { 
    let breads = 0
    for (let i = 0; i < B.length; i++) {
        if (B[i]%2!==0) {
            if (i+1 < B.length){
                B[i]++
                B[i+1]++
                breads += 2;
            } else return "NO"
        }
    }
    return breads;
}

console.log (fair())