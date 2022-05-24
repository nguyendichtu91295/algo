// https://leetcode.com/problems/group-anagrams/

const groupAnagrams = (strs) => {
    const anagaramGroup = {}

    strs.forEach((each) => {
        const sorted = each.split('').sort().join('')

        if (anagaramGroup[sorted]) {
            anagaramGroup[sorted].push(each)
        } else {
            anagaramGroup[sorted] = [each]
        }
    })

    return Object.values(anagaramGroup)
}

const run = () => {
    const result = groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])

    console.log(result)
}

export default run
