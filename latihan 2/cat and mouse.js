// Complete the catAndMouse function below.
function catAndMouse(x, y, z) {
  let distA = z - x;
  if (distA < 0) {
    distA = distA * -1;
  }
  let distB = z - y;
  if (distB < 0) {
    distB = distB * -1;
  }

  if (distA < distB) {
    return "Cat A";
  } else if (distB < distA) {
    return "Cat B";
  } else if (distA === distB) {
    return "Mouse C";
  }
}
catAndMouse(5, 6, 8);
