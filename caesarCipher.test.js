const caesarCipher = require('./caesarCipher');

test('"xyz" to "abc"', () => {
	expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('HeLLo to "KhOOr"', () => {
	expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});

test('"Hello, World!" to "Khoor, Zruog!"', () => {
	expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});