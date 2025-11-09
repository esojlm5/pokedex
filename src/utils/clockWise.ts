export const clockWiser = (cube: number[][]) => {
  let indices: number[][] = [];
  for (let i = cube[0].length - 1; i >= 0; i--) {
    let acc = [];
    for (let j = 0; j < cube.length; j++) {
      acc.push(cube[j][i]);
    }
    indices.push(acc);
  }
  return indices;
};
