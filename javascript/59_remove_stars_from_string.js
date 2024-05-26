//
//
//
class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length == 0;
  }
}
// leet**cod*e
// lecoe
function removeStars(str) {
  const stack = new Stack();
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "*") {
      stack.pop();
    } else {
      stack.push(str[i]);
    }
  }
  return stack.items.join("");
}
//
const output = removeStars("leet**cod*e");
console.log(output);
