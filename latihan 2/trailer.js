let arr = [
  [
    ":T1:202112SOAL3",
    ":T2:SOAL3/2112/AB000000011 OD:0001234500CDE5432100 SOAL003 ABCDE12345 XAS SKILL TEST ESSAY .DT",
  ],
  [
    ":T1:202111SOAL3",
    ":T2:SOAL3/2111/BC000011100 OD:0003452100EFG2451300 SOAL003 EFGHI25134 XAS SKILL TEST ESSAY .DT",
  ],
  [
    ":T1:202110SOAL3",
    ":T2:SOAL3/2110/DE210031010 OD:0001524300HIJ2145300 SOAL003 JKLMN52431 XAS SKILL TEST ESSAY .DT",
  ],
];

function swapTrailer(ar) {
  let arr = [];
  let arr1 = "";
  let arr2 = [[], [], []];

  for (let i = 0; i < ar.length; i++) {
    let lth = ar[i][1].length;
    let data = ar[i][1].slice(4, lth);
    arr.push(data);
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j <= 5; j++) {
      let arr3 = [...arr];
      let lth = 18 * j;
      let data = arr3[i].slice(lth - 18, lth);
      arr2[i].push(data);
    }

    arr1 += ar[i][0] + "\n";

    arr1 +=
      ar[i][1].slice(0, 4) +
      arr2[i][2] +
      arr2[i][3] +
      arr2[i][4] +
      arr2[i][0] +
      arr2[i][1] +
      "\n";
  }

  return arr1;
}

console.log(swapTrailer(arr));
