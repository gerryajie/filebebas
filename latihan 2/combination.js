function section3(l, t) {
  const result = [];

  if (l === 1) {
    result.push(t);
  }

  if (l > 1 && l <= 9) {
    if (l >= 1) {
      for (let a = 1; a < 9; a++) {
        if (l >= 2) {
          for (let b = a + 1; b < 9; b++) {
            if (l === 2) {
              if (a + b === t) {
                result.push([a, b]);
              }
            }
            if (l >= 3) {
              for (let c = b + 1; c < 9; c++) {
                if (l === 3) {
                  if (a + b + c === t) {
                    result.push([a, b, c]);
                  }
                }
              }
            }
            // if (l >= 4) {
            //   for (let d = c + 1; d < 9; d++) {
            //     if (l === 4) {
            //       if (a + b + c + d === t) {
            //         result.push([a, b, c, d]);
            //       }
            //     }
            //   }
            // }
          }
        }
      }
    }
  }

  return result;
}

console.log(section3(3, 12));
console.log(section3(3, 8));
console.log(section3(4, 9));
