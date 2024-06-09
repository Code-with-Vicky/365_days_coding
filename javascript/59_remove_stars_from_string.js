function removeStars(str) {
  // ["l"]
  let output = [];
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    if (ch == "*") {
      if (output.length != 0) {
        output.pop();
      }
    } else {
      output.push(ch);
    }
  }
  return output.join("");
}

const input = "*a";
const output = removeStars(input);
console.log(output);
