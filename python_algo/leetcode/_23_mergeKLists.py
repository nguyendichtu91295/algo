# https://leetcode.com/problems/merge-k-sorted-lists/

from typing import List, Optional
from python_algo.utils.singleLinkedList import ListNode


class Solution:
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        # divide and conquer
        # using heap
        pass


def run():
    a = ListNode(1)
    a.next = ListNode(4)
    a.next.next = ListNode(5)

    b = ListNode(1)
    b.next = ListNode(3)
    b.next.next = ListNode(4)

    c = ListNode(2)
    c.next = ListNode(6)

    s = Solution()
    result = s.mergeKLists([a, b, c])

    return result
