/*
Problem 4 - Largest palindrome product

A palindromic number reads the same both ways. The largest palindrome made from
the product of two 2-digit numbers is 9009 = 91 × 99.
Find the largest palindrome made from the product of two 3-digit numbers.
*/

function getPalindromeProduct(num1, num2) {
	// determine which of the two numbers is the biggest or smalelst
	var largest = Math.max(num1, num2);
	var smallest = Math.min(num2, num2);

	// util method to determine if a given number is a palindrome
	var isPalindrome = function (num) {
		var reverse = `${num}`.split('').reverse().join('');
		return parseInt(reverse, 10) === num;
	}

	// updating record of the largest palindrome
	var largestPalindrome = 0;
	// starting at the highest point of the largest input, go backwards
	outer: for (var i = largest; i > 0; i--) {
		// .. and iterate backwards through the smaller number
		inner: for (j = smallest; j > 0; j--) {
			var product = i * j;
			if (isPalindrome(product) && product > largestPalindrome) {
				largestPalindrome = product;
				break outer;
				break inner;
			}
		}
	}
	return largestPalindrome;
}

console.log(getPalindromeProduct(999,999));