function counter(arr) {
  let output = {};
  let unik = 0;

  for (let i = 0; i < arr.length; i++) {
    if (!output[arr[i]]) {
      output[arr[i]] = 1;
    } else {
      output[arr[i]] = output[arr[i]] + 1;
    }
  }

  for (let key in output) {
    unik++;
  }
  return unik;
}

console.log(counter([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
