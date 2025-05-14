//https://www.codewars.com/kata/5ac6932b2f317b96980000ca/train/javascript
//(7kyu)
const minValue = (values) => {
    const uniqueValues = new Set(values)
    return Number([...uniqueValues].sort((a,b) => a - b).join(''))
}