// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript
// 7kyu
const accum = (s) => (
    s.split('')
        .reduce((acc, curr, i) =>
            [...acc, curr.toUpperCase() + curr.toLowerCase().repeat(i)], [])
        .join('-')
)

// https://www.codewars.com/kata/57f609022f4d534f05000024/train/javascript
// 7kyu
function stray(numbers) {
  const uniqueSet = new Set(numbers)
  for (let number of uniqueSet){
    if (numbers.filter(num => num === number).length === 1){
      return number
    }
  }
}