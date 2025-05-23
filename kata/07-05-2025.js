//https://www.codewars.com/kata/56e9e4f516bcaa8d4f001763/train/javascript
//7kyu
const SequenceSum = (function() {
    function SequenceSum() {}

    SequenceSum.showSequence = function(count) {
        if (count < 0) {
            return `${count}<0`
        } else if(count === 0) {
            return `${count}=0`
        } else {
            let arrNums = []
            for (let i = 0; i <= count; i++) {
                arrNums.push(i)
            }
            const strNums = arrNums.join("+")
            const sum = arrNums.reduce((acc, curr) => acc + curr, 0)

            return `${strNums} = ${sum}`
        }
    };

    return SequenceSum;

})();

//https://www.codewars.com/kata/5a3dd29055519e23ec000074/train/javascript
//7kyu
function checkExam(correctAnsw, studentAnsw) {
    const result = correctAnsw.reduce((sumScore, correctAnsw, i) => {
        if (studentAnsw[i] === correctAnsw) return sumScore += 4
        if (studentAnsw[i] === '') return sumScore += 0
        return sumScore - 1
    }, 0)
    return result < 0 ? 0 : result;
}
//Refactor solution ↑:
function checkExam(correctAnsw, studentAnsw) {
    const result = correctAnsw.reduce((sumScore, correctAnsw, i) => {
        return studentAnsw[i] === correctAnsw ? sumScore += 4:
            studentAnsw[i] === '' ? sumScore += 0 : sumScore - 1
    }, 0)
    return result < 0 ? 0 : result;
}


//https://www.codewars.com/kata/5aff237c578a14752d0035ae/train/javascript
//7kyu
function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    const agesArr = [age1,age2,age3,age4,age5,age6,age7,age8]

    const multiplySum = agesArr.reduce((total, curr) => total + curr * curr, 0)

    return Math.floor(Math.sqrt(multiplySum) / 2)
}