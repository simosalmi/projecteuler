var isPalindrome = function(n) {
	var str = n.toString();
	if(str.length === 1) {
		return true;
	}
	else {
		for(var i = 0; i < Math.floor(str.length/2); i++) {
			if(str[i] !== str[str.length - 1 - i])
				return false;
		}
		return true;
	}
};

var getLargestPalindromeProduct = function(min, max) {
	var products = [],
		a = max,
		b = max,
		currentProduct,
		completeResults = {},
		results = [],
		largestPalindrome = 0;
	while(a >= min && b >= min) {		
		currentProduct = a*b;	
		if(largestPalindrome < currentProduct && isPalindrome(currentProduct)) {
			largestPalindrome = currentProduct;
			results.push(currentProduct);
			completeResults[currentProduct] = {a: a, b: b};
		}		

		b--;
		if(b < min) {			
			a--;			
			b = a;
		}
	}

	return {
		palindrome: results.sort(function(x, y) {
			if(x < y) return -1;
			if(x === y) return 0;
			else return 1;
		}).reverse()[0],
		a: completeResults[results[0]].a,
		b: completeResults[results[0]].b
	};
}