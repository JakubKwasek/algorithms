/**
 * 
 * @param {*} num 
 */
let arr = [];
const fibonacci = (num) => {
  if(num < 2){
    arr.push(num);
  } else {
    arr.push(fibonacci(num - 1) + fibonacci(num -2));
  }
}

fibonacci(10);

const  fibonacciMemoized = (num, memo) => {
  memo = memo || {};
  if (memo[num]) return memo[num];
  if (num <= 1) return 1;
  return memo[num] = fibonacciMemoized(num - 1, memo) + fibonacciMemoized(num - 2, memo);
}

const fibonacciLoop = (num) => {
  var a = 1, b = 0, temp;
  while (num >= 0){
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }
  return b;
}