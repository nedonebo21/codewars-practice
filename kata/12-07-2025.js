//https://www.codewars.com/kata/5413759479ba273f8100003d/train/javascript
//7kyu
const reverse = (array) => {
  return array.reduce((acc, curr) => [curr, ...acc], [])
}