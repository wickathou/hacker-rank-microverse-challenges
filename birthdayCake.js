const ar = [1,2,3,4,5,6,6,6,6,1,23,4]

const bk = () => {
ar.sort((a,b) => a-b)
return (ar.filter((a) => a === ar[ar.length-1])) ? ar.filter((a) => a === ar[ar.length-1]).length : 0;
}

console.log(bk())