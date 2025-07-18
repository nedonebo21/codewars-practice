// https://www.codewars.com/kata/5bb0c58f484fcd170700063d/train/javascript
// 8kyu
const pillars = (numPill,dist,width) => (
    numPill === 1 ? 0 : (numPill - 2) * width + (numPill - 1) * dist * 100
)

// https://www.codewars.com/kata/51fd6bc82bc150b28e0000ce/train/javascript
// 7kyu
const noOdds = (values) => values.filter(v => v % 2 === 0)