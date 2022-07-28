# https://leetcode.com/problems/word-search-ii/

from typing import List
from unittest import result


class TrieNode:
    def __init__(self):
        self.children = {}
        self.isEndOfWord = -1


class Trie:
    def __init__(self):
        self.root = TrieNode()
        pass

    def insert(self, index: int, word: str) -> None:
        current = self.root

        for key in word:
            if not key in current.children:
                current.children[key] = TrieNode()

            current = current.children[key]

        current.isEndOfWord = index


class Solution:
    def findWords(self, board: List[List[str]], words: List[str]) -> List[str]:
        result = []
        trie = Trie()
        directions = [[0, -1], [1, 0], [0, 1], [-1, 0]]
        visited = {}
        ROW = len(board)
        COL = len(board[0])

        for i, l in enumerate(words):
            trie.insert(i, l)

        def dfs(r: int, c: int, node: TrieNode):
            visited[(r, c)] = 1

            if node.isEndOfWord > -1:
                result.append(words[node.isEndOfWord])

            for [x, y] in directions:
                nextR = r + x
                nextC = c + y

                if (
                    nextR < 0
                    or nextR == ROW
                    or nextC < 0
                    or nextC == COL
                    or visited.get((nextR, nextC), 0)
                ):
                    continue

                nextL = board[nextR][nextC]
                if nextL in node.children:
                    dfs(nextR, nextC, node.children[nextL])
                    visited.pop((nextR, nextC))

            pass

        for r in range(ROW):
            for c in range(COL):
                visited = {}
                char = board[r][c]
                if char in trie.root.children:
                    dfs(r, c, trie.root.children[char])

        return set(result)


def run():
    s = Solution()
    result = s.findWords(
        [
            ["o", "a", "a", "n"],
            ["e", "t", "a", "e"],
            ["i", "h", "k", "r"],
            ["i", "f", "l", "v"],
        ],
        ["oath", "pea", "eat", "rain"],
    ) # {'eat', 'oath'}

    # result = s.findWords(
    #     [
    #         ["o", "a", "b", "n"],
    #         ["o", "t", "a", "e"],
    #         ["a", "h", "k", "r"],
    #         ["a", "f", "l", "v"],
    #     ],
    #     ["oa", "oaa"],
    # ) # {'oa', 'oaa'}
    # result = s.findWords(
    #     [
    #         ["o", "a", "a", "n"],
    #         ["e", "t", "a", "e"],
    #         ["i", "h", "k", "r"],
    #         ["i", "f", "l", "v"],
    #     ],
    #     ["oath", "pea", "eat", "rain", "hklf", "hf"],
    # ) # {'eat', 'hklf', 'oath', 'hf'}

    return result
