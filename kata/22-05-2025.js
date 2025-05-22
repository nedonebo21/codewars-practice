//https://www.codewars.com/kata/583203e6eb35d7980400002a/train/javascript
//6 kyu
function countSmileys(arr) {
    const validEyes = [':', ';']
    const validNose = ['-', '~']
    const validMouth = [')', 'D']

    const filteredArr = arr.filter(face => {
        if(face.length === 2){
            return validEyes.includes(face[0]) && validMouth.includes(face[1])
        }
        if(face.length === 3){
            return validEyes.includes(face[0]) && validNose.includes(face[1]) && validMouth.includes(face[2])
        }

        return
    })
    return filteredArr.length
}