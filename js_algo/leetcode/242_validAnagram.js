// https://leetcode.com/problems/valid-anagram

const isAnagram = (s, t) => {
	if (s.length !== t.length) {
		return false
	}

	const positionObj = {}

	for (let i = 0; i < s.length; i++) {
		const letter = s[i];

		if (positionObj[letter]) {
			positionObj[letter] += 1
		} else {
			positionObj[letter] = 1
		}
	}

	for (let i = 0; i < t.length; i++) {
		const letter = t[i];

		if (positionObj[letter]) {
			positionObj[letter] -= 1

			if (positionObj[letter] === 0) {
				delete positionObj[letter]
			}
		}
	}

	return Object.keys(positionObj).length === 0
}

const run = () => {
    const result = isAnagram('anagram', 'nagaram')
    // const result = isAnagram('rat', 'car')
    // const result = isAnagram('ác', 'cá')

    console.log(result)
}

export default run
