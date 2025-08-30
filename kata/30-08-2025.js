// https://www.codewars.com/kata/580dda86c40fa6c45f00028a/train/javascript
// 7kyu
const cubeOdd = (arr) => {
  if (arr.some(el => typeof el !== 'number')){
    return undefined
  }
  return arr.reduce((acc,curr) => {
    if (curr % 2 !== 0){
      acc += Math.pow(curr,3)
    }
    return acc
  },0)
}