//https://www.codewars.com/kata/59a8570b570190d313000037/train/javascript
//7kyu
function sumCubes(n){
    const arr = []
    for (let i = 1; i <= n; i++) {
        arr.push(i)
    }
    return arr.reduce((res, curr) => {
        return res += curr ** 3
    }, 0)
}