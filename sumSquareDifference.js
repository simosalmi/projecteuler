var getSumOfFirstN = function(n) {
	return n/2*(n+1);
};

var getSumSquareDifference = function(n) {
	var result = 0,
		sumUptoN = getSumOfFirstN(n);
	for(var i = 1; i <= n; i++) {
		result += i*(sumUptoN - getSumOfFirstN(i));
	}

	return 2*result;
};