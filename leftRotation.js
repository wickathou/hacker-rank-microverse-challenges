const leftRot = (a,d) => {
  const rotary = a.splice(d)
  return [...rotary,...a]
}

const arr = [ 1, 2, 3, 4, 5 ]

const rot = 4

console.log(leftRot(arr,rot));