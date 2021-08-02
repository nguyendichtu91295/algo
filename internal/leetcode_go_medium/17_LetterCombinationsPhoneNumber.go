package leetcode_go_medium

import (
	"strings"
)

var (
	buttons = map[string][]string{
		"1": []string{},
		"2": []string{"a", "b", "c"},
		"3": []string{"d", "e", "f"},
		"4": []string{"g", "h", "i"},
		"5": []string{"j", "k", "l"},
		"6": []string{"m", "n", "o"},
		"7": []string{"p", "q", "r", "s"},
		"8": []string{"t", "u", "v"},
		"9": []string{"w", "x", "y", "z"},
	}
)

func LetterCombinations(digits string) []string {
	dial_arr := [][]string{}

	splitted := strings.Split(digits, "")
	for _, digit := range splitted {
		dial_arr = append(dial_arr, buttons[digit])
	}

	if len(splitted) == 0 {
		return []string{}
	}

	return combineLetters(0, &dial_arr, &[]string{}, "")
}

func combineLetters(index int, keys_arr *[][]string, result *[]string, prev_str string) []string {
	if index == len(*keys_arr) {
		return *result
	}

	for _, letter := range (*keys_arr)[index] {
		new_str := prev_str + string(letter)

		if index+1 < len(*keys_arr) {
			combineLetters(index+1, keys_arr, result, new_str)
		} else {
			*result = append(*result, new_str)
		}
	}

	return *result
}
