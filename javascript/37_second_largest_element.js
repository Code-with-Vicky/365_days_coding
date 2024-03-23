function secondLargestElement(arr) {
  let first = null;
  let second = null;
  // first = 10
  // second = 10
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i]; // 10
    if (first == null) {
      first = element;
    } else if (second == null) {
      second = element;
    } else if (element > first) {
      // 10 > 9,
      second = first; // 9 ->
      first = element;
    } else if (element > second && element != first) {
      // 7 > 4
      second = element;
    }
  }
  return second;
}

const input = [10, 10];
const answer = secondLargestElement(input);
console.log(answer);
