function counter(arr) {
  let output = {};

  for (let i = 0; i < arr.length; i++) {
    if (!output[arr[i]]) {
      output[arr[i]] = 1;
    } else {
      output[arr[i]] = output[arr[i]] + 1;
    }
  }
  return output;
}

console.log(counter([2, 3, 4, 5, 3, 4]));
// {
//   "2": 1,
//   "3": 2,
//   "4": 2,
//   "5": 1
// }

function removeDuplicate(arr) {
  let objMapping = counter(arr);
  let outputArr = [];

  for (let key in objMapping) {
    console.log(key);
    // console.log(objMapping[key]);
    if (objMapping[key] === 1) {
      outputArr.push(key);
    }
  }

  return outputArr;
}

console.log(removeDuplicate([2, 3, 4, 5, 3, 4])); // [2,5]
