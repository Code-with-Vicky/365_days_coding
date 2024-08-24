function sortString(str) {
  return str.split("").sort().join("");
}
function isAnagram(s1, s2) {
  return sortString(s1) == sortString(s2);
}

function groupAnagrams(arr) {
  let groupsObj = {};
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    const key = sortString(element);
    if (groupsObj[key] == null) {
      groupsObj[key] = [element];
    } else {
      groupsObj[key].push(element);
    }
  }
  const keys = Object.keys(groupsObj);
  let groups = [];
  for (let i = 0; i < keys.length; i++) {
    const value = groupsObj[keys[i]];
    groups.push(value);
  }
  return groups;
}

const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
const output = groupAnagrams(input);
console.log(output);
