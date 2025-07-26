//https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/javascript
//6kyu
const deleteNth = (arr,n) => {
  let elCounts = {}
  return arr.filter(el => (elCounts[el] = (elCounts[el] || 0) + 1) <= n)
}

//https://www.codewars.com/kata/55a144eff5124e546400005a/train/javascript
//8kyu
class Person {
  constructor(name, age) {
    this.name = name,
        this.age = age
  }
  get info(){
    return `${this.name}s age is ${this.age}`
  }
}