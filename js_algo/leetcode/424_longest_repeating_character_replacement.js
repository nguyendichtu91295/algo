// https://leetcode.com/problems/longest-repeating-character-replacement/

const characterReplacement = (s, k) => {
    const count = {}
    let l = 0
    let r = 0
    let longestSubStr = 0
    // let maxInCount = 0
    // maxInCount = Math.max(maxInCount, Math.max(...Object.values(count)))

    while (r < s.length) {
        count[s[r]] = count[s[r]] ? count[s[r]] + 1 : 1

        while (r - l + 1 - Math.max(...Object.values(count)) > k) {
            count[s[l]] -= 1
            l++
        }

        longestSubStr = Math.max(longestSubStr, r - l + 1)
        r++
    }

    return longestSubStr
}

const run = () => {
    const result = characterReplacement('AABABBA', 1)
    // const result = characterReplacement('AAAA', 2)
    // const result = characterReplacement('AABCDAABMN', 2)
    // const result = characterReplacement('AABDACEABD', 2)
    // const result = characterReplacement('ABAB', 2)

    console.log(result)
}

export default run
