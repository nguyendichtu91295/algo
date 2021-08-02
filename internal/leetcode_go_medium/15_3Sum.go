package leetcode_go_medium

import (
	"sort"
)

func Three_sum(nums []int) [][]int {
	sort.Ints(nums)
	// fmt.Println(nums)

	result := [][]int{}
	if len(nums) < 3 {
		return result
	}
	lookup_map := make(map[int][]int)
	pointer_1 := 0
	pointer_2 := len(nums) - 1
	lookup_number := 0
	checklist_right := make(map[int]int)
	// checklist_zero := make(map[int]int)
	checklist_left := make(map[int]int)

	for index, value := range nums {
		lookup_map[value] = append(lookup_map[value], index)
	}

	if len(lookup_map[0]) > 2 {
		result = append(result, []int{0, 0, 0})
	}

	for ; pointer_2 >= 0 && nums[pointer_2] > 0; pointer_2-- {
		pointer_1 = 0

		if checklist_right[nums[pointer_2]] == 1 || nums[pointer_1] > 0 {
			continue
		}

		for ; nums[pointer_1] < 0; pointer_1++ {
			lookup_number = 0 - (nums[pointer_1] + nums[pointer_2])

			if checklist_left[nums[pointer_1]] == 1 {
				continue
			}

			checklist_left[nums[pointer_1]] = 1

			// fmt.Println("lookup_number: ", lookup_number)

			if lookup_number > 0 && checklist_right[lookup_number] == 1 {
				continue
			}

			for _, value := range lookup_map[lookup_number] {
				if value != pointer_1 && value != pointer_2 {
					// fmt.Println("found @: ", value)

					if nums[value] < 0 {
						checklist_left[nums[value]] = 1
					}

					result = append(result, []int{nums[pointer_1], nums[value], nums[pointer_2]})
					break
				}
			}
		}

		checklist_right[nums[pointer_2]] = 1
		checklist_left = make(map[int]int)

	}

	return result
}

// [[-4 0 4] [-3 0 3] [-2 0 2] [-1 0 1] [-3 4 -1] [-1 4 -3] [-4 3 1] [-4 1 3]]
// [[-4,0,4] [-3,0,3] [-2,0,2] [-1,0,1] [-3,4,-1] [-1,4,-3] [-4,3.1] ,[-3,-1,4] [-3,1,2],[-2,-1,3] [-1,-1,2],[-1,0,1]]
