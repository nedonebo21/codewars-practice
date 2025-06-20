//https://www.codewars.com/kata/55b051fac50a3292a9000025/train/javascript
// 7kyu
const filterString = (str) => parseInt(str.replace(/[a-z]/gi,''))

//https://www.codewars.com/kata/5783d8f3202c0e486c001d23/train/javascript
// 7kyu
const toNumberArray = (arr) => arr.reduce((acc,curr) => [...acc, +curr], [])