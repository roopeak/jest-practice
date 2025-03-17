function caesarCipher(string, shiftFactor) {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
	const nonAlphabet = '.,-!? '.split('');

	let stringCaesarCiphered = [];
	for (let i = 0; i < string.length; i++) {
		for (let j = 0; j < alphabet.length; j++) {
			if (nonAlphabet.includes(string[i])) {
				stringCaesarCiphered.push(string[i]);
				break;
			}

			if (string[i] === string[i].toUpperCase()) {
				if (string[i].toLowerCase() === alphabet[j]) {
					if (j + shiftFactor >= alphabet.length) {
						stringCaesarCiphered.push(alphabet[j + shiftFactor - alphabet.length].toUpperCase());
					} else {
						stringCaesarCiphered.push(alphabet[j+shiftFactor].toUpperCase());
					}
				}
			} else {
				if (string[i] === alphabet[j]) {
					if (j + shiftFactor >= alphabet.length) {
						stringCaesarCiphered.push(alphabet[j + shiftFactor - alphabet.length]);
					} else {
						stringCaesarCiphered.push(alphabet[j+shiftFactor]);
					}
				}
			}
		}
	}
	
	return stringCaesarCiphered.join("");
}

module.exports = caesarCipher;