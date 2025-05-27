//https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9/train/javascript
//7kyu
function rowWeights(arr){
    return (
        arr.reduce(([teamOne, teamTwo], curr, i) => {
            i % 2 === 0 ? [teamOne += curr, teamTwo] : [teamOne, teamTwo += curr]
            return [teamOne, teamTwo]
        }, [0,0])
    )
}

//https://www.codewars.com/kata/57a049e253ba33ac5e000212/train/javascript
//7kyu
function factorial(n){
    if (n === 1 || n === 0) {
        return 1
    } else {
        return n * factorial(n - 1)
    }
}