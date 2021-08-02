package leetcode_go

func ClimbStairs(n int) int {
	// fibonancci
	// O(n) -> time/space

	if n < 2 {
		return 1
	}

	steps := make([]int, n)
	steps[0] = 1
	steps[1] = 2

	for i := 2; i < n; i++ {
		steps[i] = steps[i-1] + steps[i-2]
	}

	return steps[n-1]
}

func helper(current, destination int, result *int) {
	if current > destination {
		return
	}

	if current == destination {
		*result += 1
	}

	helper(current+1, destination, result)
	helper(current+2, destination, result)
}

func ClimbStairsON(n int) int {
	result := 0

	helper(0, n, &result)

	return result

}

func ClimbStairsWithSpace(n int) int {
	// fibonancci
	// O(n) -> time

	if n < 2 {
		return 1
	}

	t2 := 2
	result := 1 + t2

	for i := 3; i < n; i++ {
		temp := result + t2

		result = temp
	}

	return result
}

// func main() {

// 	climbStairs(6)

// }
