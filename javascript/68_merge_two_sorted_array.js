function mergeTwoSortedArrays(arr1, arr2) {
  let output = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      output.push(arr1[i]);
      i = i + 1;
    } else {
      output.push(arr2[j]);
      j = j + 1;
    }
  }
  while (i < arr1.length) {
    output.push(arr1[i]);
    i = i + 1;
  }
  while (j < arr2.length) {
    output.push(arr2[j]);
    j = j + 1;
  }
  return output;
}

const output = mergeTwoSortedArrays([1, 5, 7, 12], [2, 3, 9]);

console.log(output);
