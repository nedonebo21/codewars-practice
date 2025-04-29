//https://www.codewars.com/kata/53697be005f803751e0015aa/train/javascript
//6 kyu (Сам!! ^-^)
function encode(str) {
    return str.replace(/[aeiou]/g, char => {
        switch(char){
            case "a": return 1;
            case "e": return 2;
            case "i": return 3;
            case "o": return 4;
            case "u": return 5;
        }
    })
}

function decode(str) {
    return str.replace(/[1-5]/g, char => {
        switch(char){
            case "1": return "a";
            case "2": return "e";
            case "3": return "i";
            case "4": return "o";
            case "5": return "u";
        }
    })
}