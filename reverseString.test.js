const reverseString = require('./reverseString');

test('reverse "hello" to "olleh"', () => {
	expect(reverseString('hello')).toBe('olleh');
});