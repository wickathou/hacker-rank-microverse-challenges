const word = 'kjowoemiduaaxasnqghxbxkiccikxbxhgqnsaxaaudimeowojk'

function palindrome(s) {
    let arr1 = []
    let arr2 = []
    let test1 = []
    let test2 = []
    let bol1 = true
    let bol2 = true
    let count1 = 0
    let count2 = 0
    let indexTrac1 = 0
    let indexTrac2 = 0
    console.log(s.length)

    if (s.length%2===0){
        for (let i=0; i<s.length/2; i++){
            arr1[i] = s[i];
            test1[i] = s[i];
        }
        for (let i=s.length-1; i>s.length/2-1; i--){
            arr2[s.length - i - 1] = s[i];
            test2[s.length - i - 1] = s[i];
        }

        for (let i = 0; i < s.length / 2; i++){
            
            if(arr1[i]!==arr2[i]){
                indexTrac1 = i;
                indexTrac2 = s.length - 1 - i;
                test1.splice(i,1)
                for (let j = 0; j <test1.length; j++){
                    if (test1[j]!==arr2[j]) {
                        count1++
                    }
                    if (count1>0){
                        bol1 = false;
                        break;
                    }
                }

                test2.splice(i, 1)
                for (let j = 0; j < test2.length; j++) {

                    if (test2[j] !== arr1[j]) {
                        count2++
                    }
                    if (count2 > 0) {
                        bol2 = false;
                        break;
                    }
                }

                if (bol1===false) {
                    if (bol2===false){
                        return -1
                    } return indexTrac2
                } return indexTrac1

                }
            }
        return -1

    } else {

        // TO BE DONE 
        for (let i = 0; i < s.length / 2; i++) {
            arr1[i] = s[i];
            test1[i] = s[i];
        }
        for (let i = s.length - 1; i > s.length / 2 - 1; i--) {
            arr2[s.length - i - 1] = s[i];
            test2[s.length - i - 1] = s[i];
        }

        console.log(test1)
        console.log(test2)

        for (let i = 0; i < s.length / 2; i++) {

            if (arr1[i] !== arr2[i]) {
                indexTrac1 = i;
                indexTrac2 = s.length - 1 - i;
                test1.splice(i, 1)
                for (let j = 0; j < test1.length; j++) {
                    if (test1[j] !== arr2[j]) {
                        count1++
                    }
                    if (count1 > 0) {
                        bol1 = false;
                        break;
                    }
                }

                test2.splice(i, 1)
                for (let j = 0; j < test2.length; j++) {

                    if (test2[j] !== arr1[j]) {
                        count2++
                    }
                    if (count2 > 0) {
                        bol2 = false;
                        break;
                    }
                }

                console.log(bol1 + ' and '+bol2)
                if (bol1 === false) {
                    if (bol2 === false) {
                        return -1
                    } return indexTrac2
                } return indexTrac1
            }
        }
        return -1
    }
}
        // if (arr1.join() == arr2.join()) {
        //     return -1
        // }
    
    
    // } else {
    //     for (let i = 0; i < Math.floor(s.length / 2); i++) {
    //         arr1[i] = s[i];
    //     }
    //     for (let i = Math.floor(s.length / 2) + 1; i < s.length; i++) {
    //         arr2[i - (Math.floor(s.length / 2) + 1)] = s[i];
    //     }
    //     console.log(arr1)
    //     console.log(arr2)
    //     if (arr1.join() == arr2.join()) {
    //         return -1
    //     }
    // }
    // }

console.log(palindrome(word))



// if (s[0]===s[s.length-1] && s[s.length/2]) {
    //     return -1
    // } else {
    //     let arr1 = [];
    //     let arr2 = [];
    //     for (let i=0; i<s.length; i++){
    //         arr1[i] = s[i];
    //         arr2[i] = s[i];
    //     }
    //     let a1 = arr1.shift();
    //     let a2 = arr2.pop();
    //     if (arr1[0]===arr1[arr1.length-1]) { 
    //         return a1
    //     } else if (arr2[0] === arr2[arr2.length - 1]) {
    //         return a2
    //     } else {
    //         return 'who knows'
    //     }
    // }