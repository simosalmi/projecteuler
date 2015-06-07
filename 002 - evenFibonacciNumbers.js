(function() {
	//problem 2
	// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
	var getNextFibonacciNumber = function(prev2, prev1) {
		return prev2 + prev1;
	};

	var getFibonacciLessThanOrEqual = function(n) {
		var sequence = [1, 2],
		currentFibonacci = {
			prev2: sequence[0],
			prev1: sequence[1],
			value: getNextFibonacciNumber(sequence[0], sequence[1])
		};

		while(currentFibonacci.value <= n) {
			sequence.push(currentFibonacci.value);
			currentFibonacci.prev2 = currentFibonacci.prev1;
			currentFibonacci.prev1 = currentFibonacci.value;
			currentFibonacci.value = getNextFibonacciNumber(currentFibonacci.prev2, currentFibonacci.prev1);
		}
		return sequence;
	};

	var sumEvenNumbersInSequence = function(sequence) {
		if(sequence !== null) {
			return sequence.reduce(function(previousValue, currentValue) {
		  		return previousValue + (currentValue % 2 === 0 ? currentValue : 0);
			}, 0);
		}
	}

	return {
		getFibonacciLessThanOrEqual: getFibonacciLessThanOrEqual,
		sumEvenNumbersInSequence: sumEvenNumbersInSequence
	};
})();