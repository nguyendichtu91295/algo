# https://leetcode.com/problems/design-add-and-search-words-data-structure/
# from typing import List


class TrieNode:
    def __init__(self):
        self.children = {}
        self.isEndOfWord = False


class WordDictionary:
    def __init__(self):
        self.root = TrieNode()

    def addWord(self, word: str) -> None:
        current = self.root

        for key in word:
            if key not in current.children:
                current.children[key] = TrieNode()

            current = current.children[key]

        current.isEndOfWord = True

    def search(self, word: str) -> bool:
        def dfs(wordIndex, start):
            current = start

            for i in range(wordIndex, len(word)):
                letter = word[i]

                if letter == ".":
                    queue =
                    for each in current.children.keys():
                        result = dfs(
                           i + 1, current.children[each]
                        )

                        if result:
                            return True
                    return False

                if letter not in current.children:
                    return False

                current = current.children[letter]

            return current.isEndOfWord

        return dfs(0, self.root)


def run():
    obj = WordDictionary()

    # # case 1
    # obj.addWord("word")
    # print(obj.search("word"))

    # # case 2
    # obj.addWord("a")
    # obj.addWord("a")
    # print(obj.search("a"))  # True
    # print(obj.search("."))  # True
    # print(obj.search("aa"))  # False
    # print(obj.search(".a"))  # False
    # print(obj.search("a."))  # False

    # # case 3
    # obj.addWord("bat")
    # obj.addWord("buet")
    # obj.addWord("beet")
    # print(obj.search("b.e."))  # True

    # # case 4
    # obj.addWord("a")
    # obj.addWord("aa")
    # print(obj.search("a"))

    # case 5
    obj.addWord("at")
    obj.addWord("and")
    obj.addWord("an")
    obj.addWord("add")
    obj.addWord("bat")
    print(obj.search("a.d."))
