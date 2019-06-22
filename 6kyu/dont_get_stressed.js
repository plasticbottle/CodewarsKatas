function stress (word) {

var result = null;
var penEndings = ["ic", "sion", "tion", "ious"];
var antiPenEndings = ["ty", "al", "ise", "ate"];

var numberOfSyllables = Number(word.replace(/[^\d]*/g, ""));
var ending = word.replace(/[\d]*/g, "");
  
  if (numberOfSyllables < 3 || numberOfSyllables > 11) {
    result = "invalid word"
  } else if (penEndings.indexOf(ending) != -1) {
    result = numberOfSyllables-1 + 'pen';
  } else if (antiPenEndings.indexOf(ending) != -1) {
    result = numberOfSyllables-2 + 'ante-pen';
  } else {
    result = "invalid word"
  }
  return result;
}
//https://www.codewars.com/kata/dont-get-stressed
