// https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript
// 6(kyu)
function isValidWalk(walk) {
    if (walk.length !== 10) return false
    let n = 0
    let s = 0
    let w = 0
    let e = 0

    for (let i = 0; i < walk.length; i++){
        walk[i] === 'n' ? n++ :
            walk[i] === 's' ? s++ :
                walk[i] === 'w' ? w++ : e++
    }

    return (n === s) && (w === e)
}
