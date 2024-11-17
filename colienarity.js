function collinearity(x1, y1, x2, y2) {
  const det = x1 * y2 - x2 * y1;

  return det === 0;
}

console.log(collinearity(1, 1, 1, 1));
