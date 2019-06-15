snail = function(array) {
//some useful constants
var result = [];
var blocker = -1;
var arrayLength = array.length;

if(typeof array[0][0] != 'undefined') {
    //want to define array length, but not yet fill it with values
    result = Array.apply(null, Array(arrayLength * arrayLength)).map(() => {});
    var x = 0;
    var y = 0;
    var a = 1;
    var b = 0;

    for(var i = 0; i < result.length; ++i) {
        result[i] = array[y][x];
        array[y][x] = blocker;
        x += a; 
        y += b;
          
        if(a != 0 && (x < 0 || x >= arrayLength || array[y][x] == blocker)) {
           x += -a; 
           y += a;
           b = a; 
           a = 0;
        }
        else if(b != 0 && (y < 0 || y >= arrayLength || array[y][x] == blocker)) {
           x += -b; 
           y += -b;
           a = -b; 
           b = 0;
        }
    }
} 
    return result;
}

// https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1
/*
Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]

For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]

*/
