const str = 12

console.log(str[0])

const time = (h,m) => {
    let minuteStr = ''
    let strM = m.toString()
    let arrM = []
    for (let i = 0; i<strM.length; i++){
        arrM[i]=strM[i]
    }

    if ()

    const minute = (m) => {
    switch (m) {
        case 0:
            return `o'clock`
        case 1 || 59:
            return 'one'
        case 2 || 58:
            return 'two'
        case 3 || 57:
            return 'three'
        case 4 || 56:
            return 'four'
        case 5 || 55:
            return 'five'
        case 6 || 54:
            return 'six'
        case 7 || 53:
            return 'seven'
        case 8 || 52:
            return 'eight'
        case 9 || 51:
            return 'nine'
        case 10 || 50:
            return 'ten'
        case 11 || 49:
            return 'eleven'
        case 12 || 48:
            return 'twelve'
        case 13 || 47:
            return 'thirteen'
        case 14 || 48:
            return 'fourteen'
        case 30:
            return 'half'
        case 15||45:
            return 'quarter'
        case 30:
            return 'half'
        default:
            const minutes2 = (arrM) => {
                switch (arrM[1]) {
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
                        return minutes2 + 'teen'
                    case '2':
                        return 'twenty ' + minutes2
                    case '3':
                        return 'twenty ' + minutes2
                    case '4':
                        return minutes2 + 'teen'
                }
            }
            minuteStr = minutes1


        }}
    
    const hour = (h) => {
        switch (h) {
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
            case '10':
                return 'ten'
            case '11':
                return 'eleven'
            case '12':
                return 'twelve'
        }}
    
    }