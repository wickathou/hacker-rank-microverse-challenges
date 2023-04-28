const minSwaps=(arr) => {
  let swap = 0
  for (let i = 0; i < arr.length; i++) {
    const dif = arr[i]-(i+1)
    if ( dif !== 0) {
      swap++
      [arr[i], arr[i+dif]]=[arr[i+dif], arr[i]]
      i--
    }
  }
  return arr
} 

//3
arr1 = [4,3,1,2]

// 1 2 4 3
// or 
// 

// 1 3 4 2
// 1 2 4 3
// 1 2 3 4


//3
arr2 = [1,3,5,2,4,6,7]
1
// 1 3 4 2 5 6 7
1
// 1 2 4 3 5 6 7
1
// 1 2 3 4 5 6 7

console.log(minSwaps(arr1));
console.log(minSwaps(arr2));
// minSwaps(arr1)
// minSwaps(arr2)