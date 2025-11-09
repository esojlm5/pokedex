export const clockWiser = (cube: number[][]) => {
  const indices: number[][] = [];
  for (let i = cube[0].length - 1; i >= 0; i--) {
    const acc = [];
    for (let j = 0; j < cube.length; j++) {
      acc.push(cube[j][i]);
    }
    indices.push(acc);
  }
  return indices;
};
