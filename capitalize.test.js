const capitalize = require('./capitalize');

test('capitalizes the first letter of the "banana" to "Banana"', () => {
	expect(capitalize('banana')).toBe('Banana');
});