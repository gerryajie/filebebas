function tambah(a, b) {
  return a + b;
}

function kurang(a, b) {
  return b - a;
}
function kali(a, b) {
  return a * b;
}
let a = 10;
let b = 50;

do {
  if (tambah(a, b) > 30) {
    b = kurang(a, b);
  } else {
    kali(a, b);
  }
  b = kurang(5, b);
} while (b > 10);

// console.log(tambah(a, b));
console.log(a);
console.log(b);
