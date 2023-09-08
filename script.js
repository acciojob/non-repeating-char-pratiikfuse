function firstNonRepeatedChar(str) {
  // Write your code here
  let map = new Map();
  for (let i = 0; i < str.length; i++) {
    if (map.has(str[i])) {
      map.set(str[i], map.get(str[i]) + 1);
    } else {
      map.set(str[i], 1);
    }
  }

  let keys = map.keys();

  for (let character of keys) {
    if (map.get(character) == 1) {
      return character;
    }
  }
  return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
