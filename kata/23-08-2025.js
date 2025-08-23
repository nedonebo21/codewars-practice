// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript
// 7kyu
const accum = (s) => (
    s.split('')
        .reduce((acc, curr, i) =>
            [...acc, curr.toUpperCase() + curr.toLowerCase().repeat(i)], [])
        .join('-')
)