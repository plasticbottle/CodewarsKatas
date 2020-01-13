/* Description:
https://www.codewars.com/kata/5b925cd69cc49d4d87000117
Given a date period in the following format :

vvvv----------- Year
YYYYMM
    ^^--------------- Month

An example input could look like this :

vvvv---------------- 4 digit code representing the year (2018)
201809
    ^^--------------- 2 digit code representing the month (Sep)

Output the same date period in the following format :

 vvv------------------------- 3 chars for month
 MMMYY
    ^^---------------- Last 2 digits of the year

The output for the above input would be :

 vvv------------------- Month (spetember)
 Sep18
    ^^------------- Year (2018)

Generalising :

Given input in the form YYYYMM output in the form MMMYY.

The last two digits of the input will correspond to a month.
*/

//Solution:
f=i=>(new Date(i[4]+i[5])+'').substr(4,3)+i[2]+i[3]
