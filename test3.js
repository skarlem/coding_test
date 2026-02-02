function fib(num){
  let fibArray = [];
  let value1 = 0;
  let value2 = 1;
  let nextValue=0;
    fibArray.push(value1)
  for(let i =0; i<num-1; i++){
    nextValue = value1+value2
    value1 = value2
    value2 = nextValue

    fibArray.push(value1)
  }
  return fibArray
}

console.log(fib(9))
