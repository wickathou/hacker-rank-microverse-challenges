let array = [1, 2, 4, 5, 7, 8, 10]
let tripletVal = 3

const trip = (arr,d)=>{
    let triplet = 0
    for (let i = 0; i < arr.length; i++) {
        console.log('first '+arr[i])

            for (let j = i+1; j < arr.length; j++){
                console.log('second ' + arr[j])
                if (arr[j]-arr[i]===d){
                    console.log('Found one')

                    for (let k = j+1; k <arr.length; k++){
                        console.log('third ' +arr[k])

                        if (arr[k]-arr[j]===d){
                            console.log('Found two '+arr[i]+arr[j]+arr[k])
                            triplet++
                            break
                        } else if (arr[k]-arr[j]>d){
                            break
                        }
                    }

                } else if (arr[j]-arr[i]>d){
                    break
                }
            }
            
        }
    return triplet

    }

console.log(trip(array,tripletVal))