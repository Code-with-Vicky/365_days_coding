function fibo_iterative(n) {
  // 0,1,1,2,3,5,8,13...
  if (n == 0 || n == 1) {
    return n;
  }
  let prev1 = 1;
  let prev2 = 0;
  for (let i = 2; i <= n; i++) {
    let curr = prev1 + prev2;
    console.log(prev2, prev1, curr);
    prev2 = prev1;
    prev1 = curr;
  }
  return prev1;
}

function fibo(n) {
  if (n == 0 || n == 1) {
    return n;
  }
  return fibo(n - 1) + fibo(n - 2);
}
console.log(fibo(6));
