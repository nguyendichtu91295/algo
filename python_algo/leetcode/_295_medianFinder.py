# https://leetcode.com/problems/find-median-from-data-stream/

# from typing import List


import heapq


class MedianFinder:
    def __init__(self):
        # max heap
        self.left = []
        heapq.heapify(self.left)
        # min heap
        self.right = []
        heapq.heapify(self.right)
        pass

    def addNum(self, num: int) -> None:
        heapq.heappush(self.left, -num)

        while len(self.left) and len(self.right) and -self.left[0] > self.right[0]:
            top = -heapq.heappop(self.left)
            heapq.heappush(self.right, top)

        while len(self.left) - len(self.right) > 1:
            top = -heapq.heappop(self.left)
            heapq.heappush(self.right, top)

        while len(self.right) - len(self.left) > 1:
            top = heapq.heappop(self.right)
            heapq.heappush(self.left, -top)

    def findMedian(self) -> float:
        total = len(self.left) + len(self.right)

        if total % 2:
            if len(self.left) > len(self.right):
                return float(-self.left[0])
            # odd
            return float(self.right[0])

        # even
        return (-self.left[0] + self.right[0]) / 2


def run():
    obj = MedianFinder()
    obj.addNum(1)
    obj.addNum(2)
    # obj.addNum(1)
    # print(obj.findMedian())
    obj.addNum(3)
    obj.addNum(4)
    print(obj.findMedian())
    # obj.addNum(4)
    # obj.addNum(2)
