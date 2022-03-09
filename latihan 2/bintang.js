// function segitiga1(baris) {
//   let pola = "";

//   for (let i = 0; i < baris; i++) {
//     for (let j = 1; j <= i + 1; j++) {
//       pola += "*";
//     }
//     pola += "\n";
//   }

//   return pola;
// }

// console.log(segitiga1(5));

// function segitiga2(baris) {
//   let pola = "";

//   for (let i = 1; i <= baris; i++) {
//     for (let j = baris; j >= i; j--) {
//       pola += "*";
//     }
//     pola += "\n";
//   }
//   return pola;
// }
// console.log(segitiga2(5));

function bintangTengah(baris) {
  let pola = "";

  for (let i = 1; i <= baris; i++) {
    for (let j = baris; j >= i; j--) {
      pola += " ";
    }
    for (let k = 1; k <= i; k++) {
      pola += "*";
    }
    for (let m = 1; m <= i - 1; m++) {
      pola += "*";
    }
    pola += "\n";
  }
  return pola;
}

console.log(bintangTengah(5));

// function bintangTengah(baris) {
//   let pola = "";

//   for (let i = 1; i <= baris; i++) {
//     for (let j = baris; j <= baris; j++) {
//       pola += " ";
//     }
//     for (let k = baris; k <= i; k--) {
//       pola += "*";
//     }
//     for (let m = baris; m <= i - 1; m--) {
//       pola += "*";
//     }
//     pola += "\n";
//   }
//   return pola;
// }

// console.log(bintangTengah(5));
