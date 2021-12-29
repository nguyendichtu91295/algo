package leetcode_go_medium

import (
	"fmt"
	"math"
)

func Jump(nums []int) int {
	if len(nums) == 1 {
		return 0
	}

	result := -1
	result = helper_jump(nums, result, 0, 0, len(nums))

	return result
}

func helper_jump(nums []int, result, current_step, start, end int) int {
	origin_step := current_step
	if start >= len(nums) {
		return 0
	}

	new_jump_range := nums[start:end]

	for r_index, value := range new_jump_range {
		fmt.Println("loop_jump_range", new_jump_range)
		fmt.Println("value", value)
		if value != 0 {
			current_step += 1
		}

		start_jump_range := start + r_index + 1
		end_jump_range := start + r_index + value + 1

		if end_jump_range > cap(nums) {
			end_jump_range = cap(nums)
		}

		if end_jump_range >= len(nums) {

			if result == -1 || current_step < result {
				result = current_step
			}
			fmt.Println("origin_step", origin_step)
		} else {
			temp := helper_jump(nums, result, current_step, start_jump_range, end_jump_range)
			result = int(math.Max(float64(temp), float64(result)))
			fmt.Println("result", result)
		}

		if len(new_jump_range) != len(nums) {
			current_step = origin_step
		}
	}

	return result
}

func newFunction(current_step int, origin_step int) {
	current_step = origin_step
}
