# https://leetcode.com/problems/k-closest-points-to-origin/

from typing import List
from heapq import heapify, heappop


class Solution:
    def kClosest(self, points: List[List[int]], k: int) -> None:
        minHeap = []

        for x, y in points:
            dist = x**2 + y**2
            minHeap.append([dist, x, y])

        heapify(minHeap)  # O(n)

        result = []
        while k > 0:
            dist, x, y = heappop(minHeap)
            result.append([x, y])
            k -= 1

        return result


def run():
    s = Solution()
    # result = s.kClosest([[1, 3], [-2, 2]], 1)
    result = s.kClosest([[3, 3], [5, -1], [-2, 4]], 2)

    return result
