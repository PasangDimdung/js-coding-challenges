function countWords(arr) {
  return arr.reduce((acc, word) => {
    debugger;
    acc[word] = (acc[word] || 0) + 1;
    return acc;
  }, {}); 
}

const fruits = ["apple", "banana", "apple"];
const wordCount = countWords(fruits);

console.log(wordCount); 