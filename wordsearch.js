const wordSearch = (letters, word) => {
  // Check the first and second arguments to be the expected type
  if (!Array.isArray(letters) || typeof word !== 'string') {
    return false;
  }
  // Join the letters in each inner array to get strings
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (const l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  // Find the max length of the strings in horizontalJoin
  const maxLength = Math.max(horizontalJoin.map(str => str.length));

  // Initialize the array to store the verticalJoin result
  let verticalJoin = [];

  // Loop through each column based on the length of the longest string
  for (let i = 0; i < maxLength; i++) {
    let column = ''; // Initialize a string for each column
            
    // Loop through each row (word) and get the character at index 'i'
    for (const row of letters) {
      column += row[i] || ''; // If there is no character at index 'i' append an empty string
    }

    // Push the column string into the verticalJoin array
    verticalJoin.push(column);
  }

  // Check for word in vertical columns
  for (const v of verticalJoin) {
    if (v.includes(word)) return true;
  }

  // If the word is not found in either direction
  return false;
};

module.exports = wordSearch;