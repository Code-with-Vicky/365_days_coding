// print 1 to n
function print(n) {
  if (n < 1) {
    return;
  }
  print(n - 1); // n=5 -> print(4) n=4 -
  console.log(n);
}

print(5);
