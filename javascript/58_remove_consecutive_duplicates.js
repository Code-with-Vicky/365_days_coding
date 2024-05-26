//
//
//
//
function removeConsecutiveDuplicates(str) {
  let output = str[0]; // a
  for (let i = 1; i < str.length; i++) {
    if (output[output.length - 1] != str[i]) {
      output += str[i];
    }
  }
  return output;
}

const input = "aaabbccaa";
const output = removeConsecutiveDuplicates(input);
console.log(`${input} = ${output}`);
