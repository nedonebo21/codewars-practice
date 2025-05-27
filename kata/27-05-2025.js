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