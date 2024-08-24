function longestCommonPrefix(arr) {
  // get min length
  let minString = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length < minString.length) {
      minString = arr[i];
    }
  }
  //
  let prefix = "";
  for (let i = 0; i < minString.length; i++) {
    let charExists = true;
    for (let j = 0; j < arr.length; j++) {
      const str = arr[j];
      if (str[i] != minString[i]) {
        charExists = false;
        break;
      }
    }
    if (charExists == true) {
      prefix += minString[i];
    } else {
      break;
    }
  }
  return prefix;
}

const input = ["coding", "coder", "code", "cow", "dog"];
const prefix = longestCommonPrefix(input);
console.log(prefix);
