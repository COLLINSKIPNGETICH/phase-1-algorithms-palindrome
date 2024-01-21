function isPalindrome(word) {
  // Write your algorithm herefunction isPalindrome(word) {
  const cleanedStr = removeNonAlphabetic(toLowercase(word));
  return cleanedStr === cleanedStr.split('').reverse().join('');
}


/* 
  Add your pseudocode here
*/
function toLowercase(str) {
    return str.toLowerCase();
}
function removeNonAlphabetic(str) {
    return str.replace(/[^a-z]/g, '');
}

/*
  Add written explanation of your solution here
*/
module.exports = isPalindrome;
// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}
