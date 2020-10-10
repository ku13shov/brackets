module.exports = function check(str, bracketsConfig) {
    let newArr = [];
    let strArr = [];
    
    for (let i = 0; i < str.length; i++) {
      strArr.push(str[i]);
    }
    
    for (let i of bracketsConfig) {
      for (let j = 0; j < 8; j++) {
        if (strArr.length > 2) {
           if (i[0] == strArr[j] && i[1] == strArr[j + 1]) {
          strArr.splice(j, 2);
          j = 0;
            }  
        }
        
      }
    }
    
    for (let i of bracketsConfig) {
      for (let j = 0; j < 2; j++) {
        if (i[0] == strArr[j] && i[1] == strArr[j + 1]) {
          return true;
        } else {
            return false;
        }
      }
    } 
      
}
