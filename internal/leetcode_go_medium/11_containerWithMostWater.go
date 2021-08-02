package leetcode_go_medium

import (
	"fmt"
	"math"
	"time"
)

func Container_with_most_water(height []int) int {
	// O(n^2)
	result := 0.0
	if len(height) == 0 {
		return int(result)
	}

	queue := make([]int, 0)
	queue = append(queue, 0)

	for i := 0; i < len(queue); i++ {
		for j := queue[i] + 1; j < len(height); j++ {
			x := float64(j - queue[i])
			y := math.Min(float64(height[queue[i]]), float64(height[j]))

			temp := x * y

			if temp > result {
				result = temp
			}

			if height[j] > height[queue[len(queue)-1]] {
				queue = append(queue, j)
			}
		}
	}

	return int(result)
}

func Container_with_most_water_2(height []int) int {
	t1 := time.Now()
	point_1 := 0.0
	point_2 := float64(len(height) - 1)
	container_value := 0
	for point_1 != point_2 {

		h := math.Min(float64(height[int(point_1)]), float64(height[int(point_2)]))
		w := point_2 - point_1

		temp := h * w

		if temp > float64(container_value) {
			container_value = int(temp)
		}

		if height[int(point_1)] > height[int(point_2)] {
			point_2 -= 1
		} else {
			point_1 += 1
		}
	}

	t2 := time.Since(t1)
	fmt.Println("time ", t2)
	return container_value
}
