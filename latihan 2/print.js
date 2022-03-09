function test2() {
  let arr = [];
  for (let i = 5; i > 0; i--) {
    if (i == 5) {
      for (let i = 1; i <= 9; i++) {
        if (i % 2 !== 0) {
          arr.push(i);
        } else {
          arr.push("_");
        }
      }
    } else {
      arr.shift();
      arr.pop();
    }
    console.log(arr.join(""));
  }
}

test2();
