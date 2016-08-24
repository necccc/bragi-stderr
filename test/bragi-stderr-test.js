var assert = require('assert');
var fs = require('fs');

suite('bragi-stderr', function () {

	test('logged to stderr, not to stdout', function () {

		var std = fs.readFileSync('test/std')
		var err = fs.readFileSync('test/err')

		assert(std.length === 0)
		assert(err.length > 0)

	})

});