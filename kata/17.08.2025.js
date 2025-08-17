//https://www.codewars.com/kata/562926c855ca9fdc4800005b/train/javascript
// 8kyu
const numberToPower = (num, pow) => Array(pow).fill(num).reduce((acc, curr) => acc * curr, 1)