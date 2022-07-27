# https://leetcode.com/problems/implement-trie-prefix-tree/

# from typing import List


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
            if not key in current.children:
                current.children[key] = {}

            current = current.children[key]

        current.isEndOfWord = True

    def search(self, word: str) -> bool:
        current = self.root

        for key in word:
            if not key in current.children:
                return False

            current = current.children[key]

        return current.isEndOfWord

    def startsWith(self, prefix: str) -> bool:
        current = self.root

        for key in prefix:
            if not key in current:
                return False

            current = current[key]

        return True


def run():
    obj = Trie()
    obj.insert("word")

    print(obj.search("word"))
    print(obj.search("wors"))
    print(obj.startsWith("wor"))
