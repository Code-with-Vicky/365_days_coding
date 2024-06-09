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

  top() {
    return this.items[this.items.length - 1];
  }
}

function nextGreaterElement(arr) {
  const stack = new Stack();
  const output = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    const element = arr[i];
    console.log(stack.items);
    // remove lesser numbers than arr[i]
    while (stack.isEmpty() == false && stack.top() < arr[i]) {
      stack.pop();
    }
    // if stack is empty, no next greater element
    if (stack.isEmpty()) {
      output.push(-1);
    } else {
      output.push(stack.top());
    }
    // Push new element to stack
    stack.push(arr[i]);
  }
  return output.reverse();
}

const input = [5, 7, 1, 2, 6, 0, 1, 12];
const output = nextGreaterElement(input);
console.log(input);
console.log(output);
