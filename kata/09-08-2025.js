// https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript
// 6kyu
const count = (string) => {
  let res = {}
  const arrStr = string.split('')
  console.log(arrStr)
  arrStr.forEach(el => {
    const curr = res[el] || 0
    res[el] = curr + 1
  })
  return res
}