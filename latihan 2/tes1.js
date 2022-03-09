function staircase(n) {
  // Write your code here
  let result = "";
  for (let i = 0; i < n; i++) {
    for (let j = 1; j <= i + 1; j++) {
      result += "#";
    }
    result += "\n";
  }
  return result;
}
console.log(staircase(5));
