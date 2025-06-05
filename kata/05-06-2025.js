//https://www.codewars.com/kata/59a96d71dbe3b06c0200009c/train/javascript
//7kyu

const generateShape = (int) =>{
    return ('+'.repeat(int) + '\n').repeat(int).trim()
}


//https://www.codewars.com/kata/58712dfa5c538b6fc7000569/train/javascript
//7kyu

function countRedBeads(n) {
    return n < 2 ? 0 : (n - 1) * 2
}
