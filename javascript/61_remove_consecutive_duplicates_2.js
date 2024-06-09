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

  top() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length == 0;
  }
}

function removeConsecutiveDuplicates(str, k) {
  const stack = new Stack();
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    if (stack.isEmpty()) {
      stack.push({
        character: ch,
        count: 1,
      });
    } else if (stack.top().character == ch) {
      stack.top().count += 1;
    } else {
      stack.push({
        character: ch,
        count: 1,
      });
    }
    if (stack.top().count == k) {
      stack.pop();
    }
  }
  //
  let output = "";
  for (let i = 0; i < stack.items.length; i++) {
    const item = stack.items[i];
    for (let j = 0; j < item.count; j++) {
      output += item.character;
    }
  }
  return output;
}

const input = "pbbcggttciiippooaais"; // aa
const k = 2;
const output = removeConsecutiveDuplicates(input, k);
console.log(output);
