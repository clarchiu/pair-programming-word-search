const transpose = require('./transpose.js').transpose;

//referenced from https://stackoverflow.com/a/35918266
const diagonalJoin = (letters, bottomUp) => { 
  const numRows = letters.length;
  const numCols = letters[0].length;
  const maxLength = Math.max(numCols, numRows);

  let toReturn = [];
  for (let k = 0; k <= 2 * (maxLength - 1); k++) {
    let word = '';
    for (let row = 0; row < numRows; row++) {
      const col = k - (bottomUp ? numRows - row : row);
      if (col >= 0 && col < numCols) {
        word += letters[row][col];
      }
    }
    toReturn.push(word);
  }
  return toReturn;
}

const checkWordInArray = (word, words) => {
  const worldRev = [...word].reverse().join('');
  for (const l of words) {
    if (l.includes(word) || l.includes(worldRev)) return true;
  }
  return false;
}

const wordSearch = (letters, word) => { 
  if (!letters || !word || letters.length === 0) return false;
  const horizontalJoin = letters.map(ls => ls.join(''))
  const verticalJoin = transpose(letters).map(ls => ls.join(''));
  const diagonalTopDownJoin = diagonalJoin(letters, false);
  const diagonalBottomUpJoin = diagonalJoin(letters, true);

  return checkWordInArray(word, horizontalJoin) ||
          checkWordInArray(word, verticalJoin) ||
          checkWordInArray(word, diagonalTopDownJoin) ||
          checkWordInArray(word, diagonalBottomUpJoin);
};

module.exports = wordSearch;
