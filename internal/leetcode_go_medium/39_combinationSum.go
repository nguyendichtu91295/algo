package leetcode_go_medium

import "sort"

func CombinationSum(candidates []int, target int) [][]int {
	result := [][]int{}
	sort.Ints(candidates)
	helper_new(0, candidates, 0, []int{}, target, &result)
	return result
}

func helper_new(current_index int, candidates []int, current_sum int, current_arr []int, target int, result *[][]int) {
	for c := current_index; c < len(candidates); c++ {
		value := candidates[c]
		temp_arr := make([]int, len(current_arr))
		copy(temp_arr, current_arr)
		temp_sum := current_sum + value
		temp_arr = append(temp_arr, value)

		if temp_sum > target {
			return
		}

		if temp_sum == target {
			*result = append(*result, temp_arr)
			return
		}

		helper_new(c, candidates, temp_sum, temp_arr, target, result)
	}
}
