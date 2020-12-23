function iterative_factorial(n) {
	let product = 1;

	while (n > 0) {
		product *= n;
		n--;
	}
	return product;
}

console.log(iterative_factorial(5));

function recursive_factorial(n) {
	if (n == 0) return 1;
	return n * recursive_factorial(n - 1);
}
console.log(recursive_factorial(5));

function iterative_fibonacci(n) {
	if (n == 0) return 0;
	if (n == 1) return 1;

	let previous = 0;
	let current = 1;

	for (let i = n; i > 1; i--) {
		let next = previous + current;
		previous = current;
		current = next;
	}
	return current;
}
console.log(iterative_fibonacci(6));

function recursive_fibonacci(n) {
	if (n == 0) return 0;
	if (n == 1) return 1;
	return recursive_fibonacci(n - 2) + recursive_fibonacci(n - 1);
}
console.log(recursive_fibonacci(6));
