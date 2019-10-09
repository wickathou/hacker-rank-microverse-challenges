const str = 'A'
// IIIAA
// KTXODXKXDXXDDOXX
function happyLadybugs(b) {
    console.log(b)
    const arr = b.split('')
    console.log(arr)
    let val = 0
    let ite = ''
    let rule = 'NO'
    if (arr.filter(a => a === '_').length<1){
        ite = arr[0]
        for (let i = 0; i < arr.length; i++) {
            if (ite === arr[i]) {
                val++
            } else if (val>1){
                val=1
            } else {
                return 'NO'
            }
            console.log(val)
            
            ite = arr[i]
        }
        if (val>1) {
            return 'YES'
        }
    }


    arr.sort()
    console.log(arr)
    if (arr.length === arr.filter(a => a === '_').length) {
        console.log(1)
        return 'YES'
    }
    if (arr.length === arr.filter(a => a === arr[0]).length && arr.length>1) {
        console.log(1)
        return 'YES'
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr.filter(a => a === arr[i]).length === 1 && arr[i] != '_') {
            console.log(1)
            return 'NO'
        }
        if (arr.filter(a => a === '_').length >= 1 && arr.filter(a => a === arr[i]).length > 1) {
            console.log(1)
            rule = 'YES'
        }
    }
    return rule

}

console.log (happyLadybugs(str))