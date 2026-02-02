function palindromeCheck(str){
  const reversedString = str.split("").reverse().join("")

  if(reversedString == str){
    return true
  }else{
    return false
  }
  // return reversedString


}

console.log('output:',palindromeCheck('112121'))
