// const minBribes = (q, name) => {
//   const sortQ = [...q].sort((a,b) => a-b)
//   let sumPos = 0
//   let sumNeg = 0
//   let fail
//   console.log(`Result for ${name}`);
//   for (let i = 0; i < q.length; i++) {
//     const value = q[i]-sortQ[i]
//     if (value > 2) {
//       console.log('Chaos');
//       return fail = 'Too chaotic'
//     }
//     console.log( value);
//     value > 0 ? sumPos = sumPos + value : sumNeg =  sumNeg + value
//   }
//   // console.log(sumPos);
//   // console.log(sumNeg);
// }

const minBribes = (q) => {
  let bribes = 0
  let control = 0
  for (let i = q.length-1; i > -1; i--) {
    if (q[i]-(i+1)>2 || q[i-1]-(i)>2) {
      return 'Too chaotic'
    }
    if (q[i] < q[i-1]) {
      bribes++
      [q[i],q[i-1]]= [q[i-1], q[i]]
    }
    if (q[i]-(i+1)!== 0) {
      control++
    }
  }
  if (control>0) {
    bribes += minBribes(q)
  }
  return bribes
}

// 3
const arr1 = [ 2, 1, 5, 3, 4 ]

// Chaotic 
const arr2 = [ 2, 5, 1, 3, 4 ]

// 4
const arr3 = [ 2,3,4,5,1 ]

// 4
const arr4 = [ 3,2,1,5,4 ]

// Chaotic 
const arr5 = [ 2,5,3,4,1 ]

// 2
const arr6 = [ 2,3,1,4,5 ]

// 1
const arr7 = [ 2,1,3,4,5 ]

// 3
const arr8 = [ 2,1,4,5,3 ]

// 4
const arr9 = [ 1,4,3,5,2 ]

// 2
const arr10 = [ 1,4,2,3,5 ]

// 6
const arr11 = [ 3,4,5,1,2 ]

// 7
const arr12 = [ 3,4,5,2,1 ]


console.log(minBribes(arr1,1)); 
console.log(minBribes(arr2,2)); 
console.log(minBribes(arr3,3))
// minBribes(arr4,4)
console.log(minBribes(arr5,5));
// minBribes(arr6,6)
// minBribes(arr7,7)
// minBribes(arr8,8)
// minBribes(arr9,9)
// minBribes(arr10,10)
// minBribes(arr11,11)
console.log(minBribes(arr12,12))