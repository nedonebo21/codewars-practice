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

// https://www.codewars.com/kata/56dbe0e313c2f63be4000b25/train/javascript
// 7kyu
const vertMirror = (str) => {
  return str.split('\n').map(el => el.split('').reverse().join(''))
      .join('\n')
}
const horMirror = (str) => {
  return str.split('\n').reverse().join('\n')
}
const oper = (fct, s) => {
  return fct(s)
}