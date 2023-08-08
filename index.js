// solution to palindrome question
function palindrome(arg) {
  return arg.split("").reverse().join("");
}

// solution to check prime number
function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  for (let index = 2; index < number; index++) {
    if (number % index === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(6));

function checkPrime(params) {
  for (const num of params) {
    if (isPrime(num)) {
      return true;
    }
  }
  return false;
}

console.log(checkPrime([6, 4, 6, 8, 9]));

// solution to sum nested arrays
const nestedArrays = [
  [2, 4],
  [5, 3],
  [
    [5, 2],
    [3, 1],
  ],
];

const sumNestedArrays = (param) => {
  let sum = 0;
  const arrs = param.flat(2);

  for (const value of arrs) {
    sum += value;
  }

  return sum;
};
console.log(sumNestedArrays(nestedArrays));

// solution of an Anagram
function isAnagram(firstString, secondString) {
  let string1 = firstString.trim().toLowerCase();
  let string2 = secondString.trim().toLowerCase();

  const sortedString1 = string1.split("").sort().join("");
  const sortedString2 = string2.split("").sort().join("");

  return sortedString1 === sortedString2;
}

// solution to return the longest word in a sentence
function longestWordInSentence(sentence) {
  const words = sentence.split(" ");

  let longestWord = "";

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

const sentence = "It's a sunny day";
console.log(longestWordInSentence(sentence));
