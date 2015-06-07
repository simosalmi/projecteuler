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

var getSumOfMultiplesOf3Or5Under = function (n) {
    // 3(1+2+3+4+5+6+7 ... n-1)
    // 5(1+2+3+4+5+6+7 ... n-1)
    return SumOfMultiplesOfNUnder(3, n) + SumOfMultiplesOfNUnder(5, n) - SumOfMultiplesOfNUnder(15, n);
}