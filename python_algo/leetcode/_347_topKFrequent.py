# https://leetcode.com/problems/top-k-frequent-elements/

from typing import List
import heapq

class Solution:
    # def topKFrequent(self, nums: List[int], k: int) -> List[int]:
    #     # max heap
    #     count = {}

    #     for i in nums:
    #         count[i] = count.get(i, 0) + 1

    #     maxHeap = []
    #     for i in count.keys():
    #         maxHeap.append([count[i], i])

    #     heapq._heapify_max(maxHeap)

    #     result = []
    #     while(k > 0):
    #         count, ele = heapq._heappop_max(maxHeap)
    #         result.append(ele)
    #         k -= 1

    #     return result

    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        # bucket sort

        return []


def run():
    s = Solution()
    result = s.topKFrequent([1, 1, 1, 2, 2, 3], 2)

    return result
