const arr = [1,2,2,3,2]
let comparer = 0;
let largest = []
let check = 0;
for (let i = 0; i < arr.length; i++) {
  console.log(arr.filter(a => a===arr[i]))

  check = arr.filter(a => a === arr[i]).length
  if (check>comparer) {
    comparer = check;
    console.log(largest = arr.filter(a => a === arr[i]));
  }
}
console.log(comparer)
console.log(comparer - arr.length)
return comparer;