const minMax=(arr) =>{
  arr.sort((a,b) => a-b)
  const max = reducer(arr, -arr[0])
  const min = reducer(arr, -arr[(arr.length)-1])
  return `${min} ${max}`
}

const reducer = (arr,value) => {
  return arr.reduce((a,b)=> a+b,value)
}

console.log(minMax([5,4,3,2,1]))