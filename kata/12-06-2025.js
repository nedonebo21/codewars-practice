// https://www.codewars.com/kata/57eaec5608fed543d6000021/train/javascript
// 7kyu

const divCon = (x) => {
    const strSum = x.reduce((acc,curr) => typeof curr === 'string'
        ? acc += parseInt(curr,10)
        : acc + 0, 0
    )
    const numsSum = x.reduce((acc,curr) => typeof curr === 'number'
        ? acc += curr
        : acc += 0,0
    )
    return numsSum - strSum
}