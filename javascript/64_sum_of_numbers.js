// sum of 1 to n
// n = 5
// 1 + 2 + 3 + 4 + 5 = 15
// without using loops
// sum = 0
// loop 1 to n
// sum += i

function sum(n) {
  if (n <= 1) {
    return n;
  }
  return n + sum(n - 1); // 5 + sum(4) -> 4 + sum(3)
}

const output = sum(5);

console.log(output);
