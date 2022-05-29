// https://leetcode.com/problems/longest-palindromic-substring/

const longestPalindrome = (s) => {
    let i = 0
    let longest = 0
    let result = ''
    while (i < s.length) {
        let l = i
        let r = i

        // check odd palindrome
        while (l > -1 && r < s.length && s[l] === s[r]) {
            if (r - l + 1 > longest) {
                longest = r - l + 1
                result = s.slice(l, r + 1)
            }
            l--
            r++
        }

        l = i
        r = i + 1
        // check even palindrome
        while (l > -1 && r < s.length && s[l] === s[r]) {
            if (r - l + 1 > longest) {
                longest = r - l + 1
                result = s.slice(l, r + 1)
            }
            l--
            r++
        }

        i++
    }

    return result
}

const run = () => {
    const result = longestPalindrome('aacabdkacaa')
    // const result = longestPalindrome('a')
    // const result = longestPalindrome('bb')
    // const result = longestPalindrome('ab')
    // const result = longestPalindrome('cbbd')
    // const result = longestPalindrome('babad')

    console.log(result)
}

export default run
