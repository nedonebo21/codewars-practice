//https://www.codewars.com/kata/59377c53e66267c8f6000027/train/javascript
//7kyu
const alphabetWar = (fight) => {
  const leftLetters = { 'w': 4, 'p': 3, 'b': 2, 's': 1}
  const rightLetters = { 'm': 4, 'q': 3, 'd': 2, 'z': 1}
  let leftScore = 0
  let rightScore = 0
  for (const letter of fight){
    if (leftLetters[letter]) leftScore += leftLetters[letter]
    if (rightLetters[letter]) rightScore += rightLetters[letter]
  }
  if (leftScore > rightScore){
    return 'Left side wins!'
  } else if(rightScore > leftScore){
    return 'Right side wins!'
  } else {
    return `Let's fight again!`
  }
}