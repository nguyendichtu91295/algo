class Solution:
    def findAnagrams(self, s: str, p: str) -> List[int]:
        if len(p) > len(s):
            return []

        l = 0
        r = 0
        anagramGroup = []
        sCount = {}
        pCount = {}

        for index, letter in enumerate(p):
            pCount[letter] = 1 + pCount.get(letter, 0)
            sCount[s[index]] = 1 + sCount.get(s[index], 0)

        anagramGroup = [0] if pCount == sCount else []

        for r in range(len(p), len(s)):
            sCount[s[r]] = 1 + sCount.get(s[r], 0)

            sCount[s[l]] -= 1

            if sCount[s[l]] == 0 :
                sCount.pop(s[l])

            l += 1
            r += 1

            if sCount == pCount:
                anagramGroup.append(l)

        return anagramGroup
