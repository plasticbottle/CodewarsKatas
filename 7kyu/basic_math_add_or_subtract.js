var calculate = str => str.match(/\d+|minus\d+|plus\d+/g).map(s => s.replace(/minus/g, '-').replace(/plus/g, '')).map(x => parseInt(x)).reduce((a, b) => a + b)+'';
//https://www.codewars.com/kata/basic-math-add-or-subtract
