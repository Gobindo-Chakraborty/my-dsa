const palindrome = (str) => str.split("").reverse().join("") === str;

console.log(palindrome("test"));
console.log(palindrome("abba"));
