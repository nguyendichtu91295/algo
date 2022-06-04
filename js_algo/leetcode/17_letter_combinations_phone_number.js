// https://leetcode.com/problems/letter-combinations-of-a-phone-number/

const letterCombinations = (digits) => {
	if (digits === "") {
		return []
	}

	const letter = {
		"2": ["a", "b", "c"],
		"3": ["d", "e", "f"],
		"4": ["g", "h", "i"],
		"5": ["j", "k", "l"],
		"6": ["m", "n", "o"],
		"7": ["p", "q", "r", "s"],
		"8": ["t", "u", "v"],
		"9": ["w", "x", "y", "z"],
	}

	const allDigits = digits.split("")
	const result = []

	const helper = (current="", level = 0) => {
		if (level === digits.length) {
			result.push(current)
			return
		}

		for (let i = 0; i < letter[allDigits[level]].length; i++) {
			const element = letter[allDigits[level]][i];

			let temp = current

			temp += element

			helper(temp, level + 1)
		}
	}

	helper()
	return result
};

const run = () => {
    const result = letterCombinations('23')

    console.log(result)
}

export default run

