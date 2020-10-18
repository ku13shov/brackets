module.exports = function check(str, bracketsConfig) {
    let strArr = [];
    let newArr = [];
    
    for (let n of bracketsConfig) {
      for (let m of n) {
        newArr.push(m);
      }
    }
    for (let i = 0; i < str.length; i++) {
      strArr.push(str[i]);
    }
    for (let i = 0; i < str.length; i++) {
      for (let j = 0; j < newArr.length; j++) {
        if (strArr[i] === newArr[j] && strArr[i + 1] === newArr[j + 1]) {
        strArr.splice(i, 2);
        i = -1;
        }
      }
    }
    
    if (strArr.length < 1) {
      return true;
    } else {
      return false;
    }
    
}
