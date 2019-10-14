const arr = [[1]]
// const arr = [[1, 3, 4], [2, 2, 3], [1, 2, 4]]

function surface(A) {

    let maxVal= 0;
    let base = 0
    for (let t=0; t<A.length; t++) {
        if (Math.max(...A[t])>maxVal) {
            maxVal = Math.max(...A[t]);
        }
        base += A[t].length
    }    
    console.log(maxVal)
    let area = 0;
    function sum(r, a) {
        return Array.isArray(a) ? a.reduce(sum, r) : r + a;
    }
    if (A[0].length !== null || A[0].length !== undefined || A[0].length >= 1){
        // area = maxVal * A.length * A[0].length
        area = maxVal * base * 4 + base * 2
        // console.log(A.reduce(sum, 0))
        // 4 + base * 2
        // console.log(base)
        // area = A.reduce(sum, 0) * 6
    } else if (A[0].length === null || A[0].length === undefined || A[0].length < 1) {
        return 0
    }
    console.log(area)

    for (let k=1; k<maxVal+1; k++) {
        let noArea = 0
        console.log('round ' + k)
        for (let i=0; i<A.length; i++) {
            for (let j=0; j<A[i].length; j++){
                console.log('Value '+A[i][j])
                if (A[i][j]>=k){

                    if (i > 0 && i < A.length-1) {
                        if (A[i][j - 1] >=k ) {
                            console.log(1)
                            noArea--
                        }
                        if (A[i][j + 1] >=k ) {
                            console.log(2)
                            noArea--
                        }
                        if (A[i - 1][j] >=k ) {
                            console.log(3)
                            noArea--
                        }
                        if (A[i + 1][j] >=k ) {
                            console.log(4)
                            noArea--
                        }

                    } else if (i === 0) {
                        if (A[i][j - 1] >=k) {
                            console.log(5)
                            noArea--
                        }
                        if (A[i][j + 1] >=k) {
                            console.log(6)
                            noArea--
                        }
                        if (A[i + 1][j] >=k) {
                            console.log(7)
                            noArea--
                        }

                    } else if (i === A.length - 1) {
                        if (A[i][j - 1] >=k) {
                            console.log(8)
                            noArea--
                        }
                        if (A[i][j + 1] >=k) {
                            console.log(9)
                            noArea--
                        }
                        if (A[i - 1][j] >=k) {
                            console.log(11)
                            noArea--
                        }
                    }
                    
                } else if (A[i][j] < k) {
                    console.log(12)
                    noArea += -4;
                }
                console.log(noArea)
            }
        } 
        console.log('areas to remove '+noArea)
        area = area + noArea
        console.log('Current area ' + area)
    }
    return area
}

console.log(surface(arr))