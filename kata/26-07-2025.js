//https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/javascript
//6kyu
const deleteNth = (arr,n) => {
  let elCounts = {}
  return arr.filter(el => (elCounts[el] = (elCounts[el] || 0) + 1) <= n)
}
