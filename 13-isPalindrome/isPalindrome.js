function isPalindrome(word) {
  // Insert code here;
  const value = word.split('');
  const reverse = value.reverse();
  const reverseString = reverse.join('');
  if(word === reverseString){
    return true;
  }
  return false;
}

// Do not edit this line;
module.exports = isPalindrome;