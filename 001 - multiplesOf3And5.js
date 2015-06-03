var getMultiplesOf3Or5Under = function(n) {
	var multiples = [];

	for(var currentNumber = 1; currentNumber < n; currentNumber++) {
		if(currentNumber % 3 === 0 || currentNumber % 5 === 0) {
			multiples.push(currentNumber);
		}
	}

	return multiples;
};

var getSumOfArray = function(arr) {
	return arr.reduce(function(previousValue, currentValue, index, array) {
  		return previousValue + currentValue;
	});
};