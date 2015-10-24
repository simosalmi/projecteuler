var cache = {
	primes: [],
	nonPrimes: []
};
var isPrime = function(n) {
	var result = true;
	if(cache.primes.indexOf(n) !== -1) {
		return true;
	}
	else if(cache.nonPrimes.indexOf(n) !== -1) {
		return false;
	}
	else {
		// have to work it out
		if(n === 1)
			result = true;
		else {			
			for(var i = 2; i <= Math.floor(n/2); i++) {
				if(n%i === 0) {
					result = false;
					break;
				}
			}
		}
	}

	if(result) {
		cache.primes.push(n);
	}
	else {
		cache.nonPrimes.push(n);
	}

	return result;
}

var findNextPrime = function(p) {
	var i = p + 1;
	while(!isPrime(i)) {
		i++;
	}
	return i;
}

Array.prototype.addUnique = function(el) {
	if(this.indexOf(el) === -1) {
		this.push(el);
	}
};

var getPrimeFactors = function(max, n, primes, p) {
	if(n === undefined) {
		n = max;
	}
	if(primes === undefined) {
		primes = [1];
	}
	if(p === undefined) {
		p = 2;
	}

	if(isPrime(n)) {
		primes.addUnique(n);
		return primes;		
	}	

	if(n%p === 0) {
		primes.addUnique(p);
		n = n/p;		
	}	

	var nextP = findNextPrime(p);

	if(nextP < max)	
		return getPrimeFactors(max, n, primes, nextP);

	return primes;
};

var exports = exports ? exports : {};

exports.getPrimeFactors = getPrimeFactors;
