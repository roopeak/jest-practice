function analyzeArray(array) {
	return object = {
		"average": array.reduce((prev, current) => prev + current) / array.length,
		"min": Math.min.apply(Math, array),
		"max": Math.max.apply(Math, array),
		"length": array.length,
	}
}

module.exports = analyzeArray;