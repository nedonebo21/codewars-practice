//https://www.codewars.com/kata/57ed30dde7728215300005fa/train/javascript
//7kyu
function bump(x){
    const res = x
        .split('')
        .reduce((acc,curr) => curr === 'n' ? acc += 1 : acc += 0, 0)
    return res <= 15 ? "Woohoo!" : "Car Dead"
}