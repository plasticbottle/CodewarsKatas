function count (string) {  
var arr = [];
for(i=0;i<string.length;i++) {
  //store letter, and number of occurances into a sub-array
  c = [string[i], string.split('').reduce((a, x) => x === string[i] ? ++a : a, 0)] 
  //check if current sub-array already exists in main array
  if((JSON.stringify(arr).indexOf(JSON.stringify(c)) != -1) === false) { 
  arr.push(c); //if it does not, store it
  }
}
if(arr.length>0){ //check that input was not empty
  //convert array of key-value tubles to object for requirement purposes
  return Object.assign(...arr.map(x => ({[x[0]]: x[1]}))); 
} else { //if input was empty return empty object
  return {};
  }
}

//https://www.codewars.com/kata/52efefcbcdf57161d4000091/javascript

/*
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
*/
