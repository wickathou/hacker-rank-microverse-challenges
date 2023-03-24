const staircase=(n)=>{
  const array = new Array(n)
  const returner = []
  array.fill('#')
  for (let i = 0; i < array.length; i++) {
    returner.unshift(array.join(''))
    array[i]=' '
  }
  console.log(returner.join('\n'));
}

staircase(4)