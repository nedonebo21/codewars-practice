//https://www.codewars.com/kata/562926c855ca9fdc4800005b/train/javascript
// 8kyu
const numberToPower = (num, pow) => Array(pow).fill(num).reduce((acc, curr) => acc * curr, 1)

//https://www.codewars.com/kata/56a946cd7bd95ccab2000055/train/javascript
// 8kyu
const lowercaseCount = (str) => (
    str.split('').reduce((acc,char) => {
      if (char !== char.toUpperCase() && char === char.toLowerCase()){
        return acc + 1
      }
      return acc
    }, 0)
)