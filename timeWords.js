const str = 12

console.log(str[0])

const time = (h,m) => {
    let strM = m.toString()
    let arrM = []
    for (let i = 0; i<strM.length; i++){
        arrM[i]=strM[i]
    }

    console.log(m)
    console.log (h)


    const minute = (m) => {
    switch (m) {
        case 0:
            break
        case 1:
            return 'one'
        case 2:
            return 'two'
        case 3:
            return 'three'
        case 4:
            return 'four'
        case 5:
            return 'five'
        case 6:
            return 'six'
        case 7:
            return 'seven'
        case 8:
            return 'eight'
        case 9:
            return 'nine'
        case 10:
            return 'ten'
        case 11:
            return 'eleven'
        case 12:
            return 'twelve'
        case 13:
            return 'thirteen'
        case  9:
            return 'one'
        case 58:
            return 'two'
        case 57:
            return 'three'
        case 56:
            return 'four'
        case 55:
            return 'five'
        case 54:
            return 'six'
        case 53:
            return 'seven'
        case 52:
            return 'eight'
        case 51:
            return 'nine'
        case  50:
            return 'ten'
        case  49:
            return 'eleven'
        case  48:
            return 'twelve'
        case  47:
            return 'thirteen'
        case 30:
            return 'half'
        case 15:
            return 'quarter'
        case 45:
            return 'quarter'
        default:
            const minutes2 = (arrM) => {
                switch (arrM[1]||arrM) {
                    case '0':
                        break
                    case '1':
                        return 'one'
                    case '2':
                        return 'two'
                    case '3':
                        return 'three'
                    case '4':
                        return 'four'
                    case '5':
                        return 'five'
                    case '6':
                        return 'six'
                    case '7':
                        return 'seven'
                    case '8':
                        return 'eight'
                    case '9':
                        return 'nine'
                }
            }
            const minutes1 = (arrM) => {
                switch (arrM[0]) {
                    case '1':
                        return minutes2(arrM) + 'teen'
                    case '2':
                        return 'twenty ' + minutes2(arrM)
                    case '3':
                        return 'twenty ' + minutes2(Math.abs(parseInt(arrM[1]) - 10).toString())
                    case '4':
                        return minutes2(Math.abs(parseInt(arrM[1]) - 10).toString()) + 'teen'
                }
            }
            return minutes1(arrM);


        }}
    
    const hour = (h) => {
        switch (h) {
            case 1:
                return 'one'
            case 2:
                return 'two'
            case 3:
                return 'three'
            case 4:
                return 'four'
            case 5:
                return 'five'
            case 6:
                return 'six'
            case 7:
                return 'seven'
            case 8:
                return 'eight'
            case 9:
                return 'nine'
            case 10:
                return 'ten'
            case 11:
                return 'eleven'
            case 12:
                return 'twelve'
            default:
                break
        }
    
    }


    console.log(m)


    if (m === 30 || m === 15) {
        return `${minute(m)} past ${hour(h)}`
    }

    if (m === 45) {
        return `${minute(m)} to ${hour((h === 12) ? 1 : h + 1)}`
    }
    
    if (m === 0) {
        return `${hour(h)} o' clock`
    }

    if (m === 1) {
        return `${minute(m)} minute past ${hour(h)}`
    }
    
    if (m < 30 && m > 0) {
        return `${minute(m)} minutes past ${hour(h)}`
    }
    if (m > 30 && m < 60) {
        return `${minute(m)} minutes to ${hour((h === 12) ? 1 : h + 1)}`
    }
    
    err;
    }

console.log(time(5,45))