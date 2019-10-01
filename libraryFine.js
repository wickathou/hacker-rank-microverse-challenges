// delivery dates
const DD = 28;
const DM = 2;
const DY = 2015;

// due dates1
const dd = 15;
const dm = 4;
const dy = 2015;

const test = (d1, m1, y1, d2, m2, y2) =>{
if (y1===y2) {
  if (m1===m2){
    if (y1<=d2){
      return 0;
    } else return Math.abs(y1-d2)*15
  } else return (m1 < m2) ? 0 : Math.abs(m1 - m2) * 500
} else return (y1 < y2) ? 0 : Math.abs(y1 - y2) * 10000;
}

console.log(test(DD, DM, DY, dd, dm, dy))