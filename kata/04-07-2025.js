// https://www.codewars.com/kata/54fe05c4762e2e3047000add/train/javascript
// 8kyu
class Ship {
  constructor(draft, crew) {
    this.draft = draft
    this.crew = crew
  }
  isWorthIt(){
    return this.draft - (this.crew * 1.5) > 20
  }
}

// https://www.codewars.com/kata/580755730b5a77650500010c/train/javascript
// 7kyu
function sortMyString(str) {
  let oddStr = str.split('').filter((el,i) => i % 2 === 0).join('')
  let evenStr = str.split('').filter((el,i) => i % 2 !== 0).join('')
  return `${oddStr} ${evenStr}`
}

// https://www.codewars.com/kata/5ba38ba180824a86850000f7/train/javascript
// 7kyu
function solve(arr) {
  return [...new Set(arr.reverse())].reverse();
//   return arr.reverse().filter((el,i) => arr.indexOf(el) === i).reverse()
}