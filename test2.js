function isPrime(num){
  if(num ==1){
    return false
  }

  if(num == 2){
    return true
  }else{
    let counter =0;
    for(let i =1; i < num; i++){
      if(i % num === 0){
        counter++
        console.log(i % num)
      }
    }
    console.log(counter)
    if(counter == 2){
      return true
    }else{
      return false
    }
  }
  return false

}
// console.log('AA',2 % 2 ===0)
console.log(isPrime(2))
