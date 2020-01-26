//Extending JavaScript Objects: Reverse String
//https://www.codewars.com/kata/581270cb4927602fc800005a/solutions/javascript

/*
Description:

Unfortunately, there's no a .reverse() method for the JavaScript String object.

Your task is to extend JavaScript String object, so you can reverse strings just like this:

'Hello, World!'.reverse();

The method should return:

'!dlroW ,olleH'

*/

String.prototype.reverse = function() {
    var result = '';
    for (var i = this.length - 1; i > -1; result += this[i--]) {}
        return result;
}
