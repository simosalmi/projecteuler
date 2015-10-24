var getLargestPrimeFactor = function(n) {
	var lastFactor;
	if(n%2 === 0) {
		lastFactor = 2;
		n = n/2;
		while(n%2 === 0) {
			n = n/2;
		}
	}
	else {
		lastFactor = 1;
	}

	var factor = 3,
		maxFactor = Math.sqrt(n);
	while(n>1 && factor<=maxFactor) {

		if(n%factor === 0) {
			n = n/factor;
			lastFactor = factor;
			while(n%factor === 0) {
				n = n/factor
			}
			maxFactor = Math.sqrt(n);
		}
		factor += 2;
	}

	if(n===1) {
		return lastFactor;
	}
	else {
		return n;
	}
}