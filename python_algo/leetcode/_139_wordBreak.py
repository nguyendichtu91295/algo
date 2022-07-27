# https://leetcode.com/problems/word-break/

from typing import List


class TrieNode:
    def __init__(self):
        self.children = {}
        self.isEndOfWord = False


class Trie:
    def __init__(self):
        self.root = TrieNode()
        pass

    def insert(self, word: str) -> None:
        current = self.root

        for key in word:
            if key not in current.children:
                current.children[key] = TrieNode()

            current = current.children[key]

        current.isEndOfWord = True

    def searchWordBreak(self, s: str) -> bool:
        pass


class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
        wordTrie = Trie()

        for each in wordDict:
            wordTrie.insert(each)

        return wordTrie.searchWordBreak(s)


def run():
    s = Solution()
    # result = s.wordBreak("leetcode", ["leet", "code"]) # True
    # result = s.wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]) # False
    # result = s.wordBreak("abcd", ["a", "abc", "b", "cd"])  # True
    # result = s.wordBreak("aaaaaaa", ["aaaa", "aa"])  # False
    result = s.wordBreak("aaaaaaa", ["aaaa", "aaa"])  # True

    return result
