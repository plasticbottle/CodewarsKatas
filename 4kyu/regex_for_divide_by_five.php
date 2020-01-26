<?php
//Regular expression for binary numbers divisible by 5
//https://www.codewars.com/kata/5647c3858d4acbbe550000ad/php

/*
Description:

Define a regular expression which tests if a given string representing a binary number is divisible by 5.
Examples:

// 5 is divisible by 5
preg_match($pattern, '101'); // => 1
// 135 is divisible by 5
preg_match($pattern, '10000111'); // => 1
// 666 is not divisible by 5
preg_match($pattern, '0000001010011010'); // => 0
*/
$pattern = '/^(0|1((10)*(0|11)(01*01)*01*00)*(10)*(0|11)(01*01)*1)+$/';
