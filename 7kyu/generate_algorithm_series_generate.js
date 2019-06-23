var generate = (length) => {return [...Array(length)].map(() => Math.round(Math.random())).join('');};
//Generate a chromosome with length of 4 generate(4) could return the chromosome 0010, 1110, 1111... or any of 2^4 possibilities.
//https://www.codewars.com/kata/567d609f1c16d7369c000
