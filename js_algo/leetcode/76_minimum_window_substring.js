// https://leetcode.com/problems/minimum-window-substring/description/

const minWindow = (s, t) => {
    if (t.length === 0 || s.length < t.length) {
        return ''
    }


    const tCount = {}
    const sCount = {}
    let minimumSubString = []
    for (let i = 0; i < t.length; i++) {
        const element = t[i]
        tCount[element] = tCount[element] ? ++tCount[element] : 1
    }
	let validCount = 0
	const need = Object.keys(tCount).length
    let l = 0
    let r = 0

    while (r < s.length) {
        sCount[s[r]] = sCount[s[r]] ? ++sCount[s[r]] : 1

        if (tCount[s[r]] && sCount[s[r]] === tCount[s[r]]) {
            validCount++
        }

        while (validCount === need) {
            if (
                minimumSubString.length === 0 ||
                minimumSubString[1] - minimumSubString[0] + 1 > r - l + 1
            ) {
                minimumSubString = [l, r]
            }

            sCount[s[l]] -= 1
            if (tCount[s[l]] && tCount[s[l]] > sCount[s[l]]) {
                validCount--
            }

            if (sCount[s[l]] === 0) {
                delete sCount[s[l]]
            }

            l++
        }
        r++
    }

    if (minimumSubString.length === 0) {
        return ''
    }

    return s.substring(minimumSubString[0], minimumSubString[1] + 1)
}

const run = () => {
    const result = minWindow('ADOBECODEBANC', 'ABC')
    // const result = minWindow('a', 'a')
    // const result = minWindow('aa', 'aa')

    console.log(result)
}

export default run
