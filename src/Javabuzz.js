function Javabuzz() {};

Javabuzz.prototype._isDivisibleBy = function(number, divisor) {
	return (number % divisor === 0);
};

Javabuzz.prototype.isDivisibleByThree = function(number) {
	return this._isDivisibleBy(number, 3);
};

Javabuzz.prototype.isDivisibleByFive = function(number) {
	return this._isDivisibleBy(number, 5);
};

Javabuzz.prototype.isDivisibleByFifteen = function(number) {
	return this._isDivisibleBy(number, 15);	
};

Javabuzz.prototype.says = function(number) {
	if (this.isDivisibleByFifteen(number)) return "Fizzbuzz";
	if (this.isDivisibleByThree(number)) return "Java";
	if (this.isDivisibleByFive(number)) return "Buzz";
	return number;
};

// For playing in console:
// for( var i = 1; i <= 100; i++) { console.log(javabuzz.says(i)) }