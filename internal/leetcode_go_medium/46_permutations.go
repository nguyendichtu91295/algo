package leetcode_go_medium

func Permute(nums []int) [][]int {
	result := [][]int{}
	return helper_permute([]int{}, nums, result, len(nums))
}

func helper_permute(permutation_arr []int, base_arr []int, result [][]int, arr_length int) [][]int {
	if len(permutation_arr) == arr_length {
		result = append(result, permutation_arr)
		return result
	}
	for index, value := range base_arr {
		left := index
		left_arr := base_arr[0:left]
		right_arr := base_arr[left+1:]

		new_base_arr := append([]int{}, left_arr...)
		new_base_arr = append(new_base_arr, right_arr...)

		new_permutation_arr := make([]int, len(permutation_arr))
		copy(new_permutation_arr, permutation_arr)
		new_permutation_arr = append(new_permutation_arr, value)

		result = helper_permute(new_permutation_arr, new_base_arr, result, arr_length)
	}

	return result
}
