package leetcode_go_medium

func GenerateParenthesis(n int) []string {
	result_map := make(map[string]int)

	result_string := []string{}
	for k := range result_map {
		result_string = append(result_string, k)
	}
	return result_string
}

/*
output
[
	"(((())))","((()))()",
	"()((()))","(())()()",
	"()(())()","()()(())",
	"()()()()","(()()())"
]

expected
[
	"(((())))","((()()))",
	"((())())","((()))()",
	"(()(()))","(()()())",
	"(()())()","(())(())",
	"(())()()","()((()))",
	"()(()())","()(())()",
	"()()(())","()()()()"
]
*/
