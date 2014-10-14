describe('Javabuzz', function() {

	var javabuzz;

	beforeEach(function() {
		javabuzz = new Javabuzz();
	});

	describe('knows when a number is divisible by', function() {

		it('3', function() {
			expect(javabuzz.isDivisibleByThree(3)).toBe(true);
		});

		it('5', function() {
			expect(javabuzz.isDivisibleByFive(5)).toBe(true);
		});

		it('15', function() {
			expect(javabuzz.isDivisibleByFifteen(15)).toBe(true);
		});

	});

	describe('knows when a number is NOT divisible by', function() {

		it('3', function() {
			expect(javabuzz.isDivisibleByThree(1)).toBe(false);
		});

		it('5', function() {
			expect(javabuzz.isDivisibleByFive(1)).toBe(false);
		});

		it('15', function() {
			expect(javabuzz.isDivisibleByFifteen(1)).toBe(false);
		});

	});

	describe('when playing, says', function() {

		it('"Java" when a number is divisible by 3', function() {
			expect(javabuzz.says(3)).toEqual("Java");
		});

		it('"Buzz" when a number is divisible by 5', function() {
			expect(javabuzz.says(5)).toEqual("Buzz");
		});

		it('"Fizzbuzz" when a number is divisible by both', function() {
			expect(javabuzz.says(15)).toEqual("Fizzbuzz");
		});
	});
});