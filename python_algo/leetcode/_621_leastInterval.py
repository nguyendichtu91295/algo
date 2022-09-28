# https://leetcode.com/problems/task-scheduler/

from typing import List
from heapq import heapify, heappop, heappush


class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:
        counter = {}
        for task in tasks:
            counter[task] = counter.get(task, 0) + 1

        maxHeap = []
        for key in counter:
            maxHeap.append(-counter[key])

        heapify(maxHeap)
        queue = []

        time = 0
        while maxHeap or queue:
            time += 1
            if len(maxHeap):
                numOfTask = heappop(maxHeap) + 1

                if numOfTask:
                    queue.append([numOfTask, time + n])

            while len(queue) and queue[0][1] == time:
                task = queue.pop(0)
                heappush(maxHeap, task[0])

        return time


def run():
    s = Solution()
    # result = s.leastInterval(["A", "A", "A", "B", "B", "C", "C"], 2) # 7
    # result = s.leastInterval(["A","A","A","B","B","B"], 2) # 8
    result = s.leastInterval(["A","A","A","B","B","B"], 0) # 6
    # result = s.leastInterval(["A","A","A","A","A","A","B","C","D","E","F","G"], 2) # 16

    return result
