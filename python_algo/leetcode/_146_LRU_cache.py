# https://leetcode.com/problems/lru-cache/

class Node:
	def __init__(self, key, value) -> None:
		self.value = value
		self.key = key
		self.next = None
		self.prev = None


class DoublyLinkedList:
	def __init__(self):
		self.head = None
		self.tail = None
		self.length = 0

	def clearList(self):
		self.tail = None
		self.head = None
		self.length = 0

	def push(self, newNode):
		if self.length:
			self.tail.next = newNode
			newNode.prev = self.tail
			self.tail = newNode
		else:
			self.head = newNode
			self.tail = newNode

		self.length += 1

	def pop(self):
		if not self.length:
			return

		removedNode = self.tail

		if self.length == 1:
			self.clearList()
		else:
			self.tail = removedNode.prev
			self.tail.next = None
			self.length -= 1

		return removedNode

	def shift(self):
		if not self.length:
			return

		removedNode = self.head

		if self.length == 1:
			self.clearList()
		else:
			self.head = removedNode.next
			self.length -= 1

		return removedNode

	def swapTail(self, node):
		if self.length <= 1:
			return None

		prev = node.prev
		next = node.next

		if node == self.tail:
			return

		if node == self.head:
			self.head = next
			self.head.prev = None
		else:
			if prev:
				prev.next = next

			if next:
				next.prev = prev

		self.tail.next = node
		node.prev = self.tail
		self.tail = node
		self.tail.next = None


class LRUCache:
	def __init__(self, capacity):
		self.capacity = capacity
		self.storage = {}
		self.dll = DoublyLinkedList()

	def get(self, key):
		result = self.storage.get(key, None)

		if result == None:
			return -1

		self.dll.swapTail(result)

		return result.value


	def put(self, key, value):
		node = self.storage.get(key, None)

		if node:
			# check LRU order
			node.value = value

			self.dll.swapTail(node)
			return None

		if self.dll.length == self.capacity:
			# remove LRU item && append new key
			lruItem = self.dll.head
			self.storage.pop(lruItem.key)
			self.dll.shift()

		node = Node(key, value)
		self.storage[key] = node

		self.dll.push(node)
