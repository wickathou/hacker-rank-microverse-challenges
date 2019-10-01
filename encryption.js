let str = 'feedthedog'
// let arr = []
// for (let i = 0; i < str.length; i++) {
//     arr[i] = str[i];
// }
// arr.push(' ')

// console.log(arr)

const encryption = (s) => {
    let columns = 0;
    let rows = 0;
    let length = s.length;
    let arr = []
    let arrTemp = []
    let res = [];
    let floor = Math.floor(Math.sqrt(length));
    console.log(floor)
    let ceil = Math.ceil(Math.sqrt(length));
    console.log(ceil)

    
    if (floor*floor>=length) {
        columns = floor;
        rows = floor;
    } else if (floor*ceil>=length) {
        columns = ceil;
        rows = floor;
    } else if (ceil*ceil>=length) {
        columns = ceil;
        rows = ceil;
    }

    for (let i = 0; i < length; i++) {
        arr[i]=s[i];
    }

    for (let k = 0; k<rows; k++){
        arrTemp[k] = arr.splice(0,columns)
    }
    console.log(arrTemp)

    for (let j = 0; j<columns; j++){
        for (let k = 0; k < rows; k++) {
            res.push(arrTemp[k][j])
        }
        res.push(' ')
    }

return res.join('')   



}

console.log(encryption(str))