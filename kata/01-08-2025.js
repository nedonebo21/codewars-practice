//https://www.codewars.com/kata/5663f5305102699bad000056/train/javascript
// 7kyu
function mxdiflg(a1, a2) {

  if (!a1.length || !a2.length) return -1

  const length1 = a1.map(el => el.length)
  const length2 = a2.map(el => el.length)

  const Difference1 = Math.max(...length1) - Math.min(...length2)
  const Difference2 = Math.max(...length2) - Math.min(...length1)

  return Math.max(Difference1, Difference2)
}

//https://www.codewars.com/kata/54ff0d1f355cfd20e60001fc/train/javascript
// 7kyu
function factorial(n){
  if (n < 0 || n > 12) {
    throw new RangeError('err')
  } else if (n > 1) {
    return n * factorial(n-1)
  } else {
    return 1
  }
}