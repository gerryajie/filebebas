function anagramCheck(arr1, arr2) {
  let obj = {};

  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (!obj[arr1[i]]) {
      obj[arr1[i]] = 1;
    } else {
      obj[arr1[i]] = obj[arr1[i]] + 1;
      console.log(obj[arr1[i]], "array 1");
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (!obj[arr2[i]]) {
      return false;
    }

    obj[arr2[i]]--;
    console.log(obj[arr2[i]], "array 2");
  }

  return true;
}

console.log(anagramCheck("gerypratama", "pratamagery"));
