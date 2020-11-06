const transpose = function(matrix) {
  const numRows = matrix.length, numCols = matrix[0].length;
  const results = [];
  for (let i = 0; i < numCols; i++) {
    results[i] = Array(numRows);
  }
  
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      results[col][row] = matrix[row][col];
    }
  }
  return results;
};

const printMatrix = (matrix) => {
  for (const row of matrix) {
    for (const el of row) {
      process.stdout.write(el + " ");
    }
    process.stdout.write('\n');
  }
};

module.exports = { transpose, printMatrix };