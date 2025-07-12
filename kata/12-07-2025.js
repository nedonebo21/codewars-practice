//https://www.codewars.com/kata/5413759479ba273f8100003d/train/javascript
//7kyu
const reverse = (array) => {
  return array.reduce((acc, curr) => [curr, ...acc], [])
}

//https://www.codewars.com/kata/56269eb78ad2e4ced1000013/train/javascript
//7kyu
const findNextSquare = (sq) => {
  const perf = Math.sqrt(sq)
  return perf % 1 === 0 ? (perf + 1) * (perf + 1) : -1
}