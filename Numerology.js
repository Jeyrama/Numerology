/*
In numerology, every number has a certain meaning 
that expresses someone's connection to the universe! 
This single digit integer can be calculated by adding 
up every digit in the birthdate: year, month, and date.

Task:
  Calculate the single integer digit by adding up every digit in the birthdate: 
  month, date, full year, from left to right (MMDDYYYY). 
  If the sum is greater or equal to 10, add up the two digits of the sum.

You will be passed in a Date object corresponding to your language.

Example:
  with date '06/14/2010'

  => 06142010
  sum 	digits left 	action
  0 	06142010 	0+0
  0 	6142010 	0+6
  6 	142010 	6+1
  7 	42010 	7+4
  11 	2010 	1+1 (sum is greater or equal to 10)
  2 	2010 	2+2
  4 	010 	4+0
  4 	10 	4+1
  5 	0 	5+0
  5 	done 	

So, what is your number?
*/


// Solution

function solution(date){
	let sum = date.getDate() + date.getMonth()+1 + date.getFullYear();
  while(sum > 9) sum = Math.floor(sum/10) + (sum%10);
  return sum;
}

// or

function solution(date){
  let strDate = date.getDate() + '' + (date.getMonth() + 1) + '' + date.getFullYear();
  console.log(strDate);
  return sumDigits(parseInt(strDate, 10));
}

function sumDigits(val) {
  let sum = 0;
  while(val > 10) {
    sum += val % 10;
    val = Math.floor(val / 10);
  }
  sum += val;
  return sum > 10 ? sumDigits(sum) : sum;
}