/*
Problem 3 - Largest prime factor

The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143 ?
 */

function findLargestPrimeFactor(num) {
	let factors = 1;
	for (let i=2; i<num; i++) {
		if (num % i === 0) {
			factors = factors * i;
			if (factors === num) {
				return i;
			}
		}
	}
}

console.log(findLargestPrimeFactor(600851475143));