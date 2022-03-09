function alphabetPosition(string) {
  // let hasil="";
  // for (let i=0;i<string.length;i++){
  //   let alpa=string.toUpperCase().charCodeAt(i);
  //   if(alpa>64 && alpa<91)hasil+=alpa-64+" ";
  // }
  // return hasil.slice(0,hasil.length -1);
  // pseudocode
  let dict = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };

  let subOutput = [];

  for (let i = 0; i < string.length; i++) {
    let key = string[i].toLowerCase();
    if (dict[key]) {
      subOutput.push(dict[key]);
    }
  }

  let output = "";

  for (let i = 0; i < subOutput.length; i++) {
    if (i !== subOutput.length - 1) {
      output += subOutput[i] + " ";
    } else {
      output += subOutput[i];
    }
  }

  return output;
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
//"20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
console.log(alphabetPosition("Mohamad Dena Eka Putra"));
console.log(alphabetPosition("Nushair Falah "));
console.log(alphabetPosition("Fadhlan Fariz"));
console.log(alphabetPosition("Alone at last"));
console.log(alphabetPosition("game of throne"));
console.log(alphabetPosition("Doom Bringer"));
console.log(alphabetPosition("I'm Yours"));
