//https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript
//6 kyu
function sortArray(array) {
    const oddArr = array.filter((num) => num % 2).sort((a,b) => a -b);
    return array.map((num) => num % 2 ? oddArr.shift() : num);
}