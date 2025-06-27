// https://www.codewars.com/kata/58daa7617332e59593000006/train/javascript
// 7kyu
const findLongest = (array) => (
    array.reduce((acc,curr) => (`${curr}`.length > `${acc}`.length ? curr : acc))
)