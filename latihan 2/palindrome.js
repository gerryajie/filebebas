function solution(inputString) {
  const lengthString = inputString.length;
  const median = Math.floor(lengthString / 2);
  console.log(lengthString);
  console.log(median);

  for (let i = 0; i < median; i++) {
    if (inputString[i] !== inputString[lengthString - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(solution("aabaa"));
// console.log(solution(lengthString);
