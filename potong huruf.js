const kata = (data) => {
  let pois = "";
  for (let i = 0; i < data.length; i++) {
    if (data[i] != "a" && data[i] != "i") {
      pois += data[i];
    }
  }
  return pois;
};

const lara = (input) => {
  let kase = "";
  for (i = 0; i < input.length; i++) {
    if (input[i] != "a") {
      kase += input[i];
    }
  }
  return kase;
};
console.log(kata("agw peingein moalior"));
console.log(lara("sedang tidak ingin bercinta"));
console.log(kata);
