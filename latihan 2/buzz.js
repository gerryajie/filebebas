function test1() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("BIZZBUZZ");
    } else if (i % 3 == 0) {
      console.log("BIZZ");
    } else if (i % 5 == 0) {
      console.log("BUZZ");
    } else {
      console.log(i);
    }
  }
}

test1();
