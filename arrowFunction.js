// normal Function
function normalFunc(a, b) {
  return a + b;
}
console.log(normalFunc(11, 20));

// arrow Function
const arrowFunc = (a, b) => a + b;
console.log(arrowFunc(12, 12));

// curry function
const curryfunc = (a) => (b) => a + b;
console.log(curryfunc(10)(11));
