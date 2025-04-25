//https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript
//(7kyu)
function squareDigits(num){
    let numStr = num.toString();
    let resArr = [];
    for(let i = 0; i < numStr.length; i++){
        resArr.push(numStr[i] * numStr[i]);
    }

    return Number(resArr.join(''))
}