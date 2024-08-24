function checkTwoStringsRotated(str1, str2) {
  if (str1.length != str2.length) {
    return false;
  }
  const newStr = str1 + str1;
  return newStr.includes(str2);
}

console.log(checkTwoStringsRotated("abc", "cba"));
