package leetcode_go_medium

func GenerateParenthesis(n int) []string {
	result := []string{}

	for i := n; i > 0; i-- {
		fillGapLeftRight(&result, n*2, 0, i)
	}

	if n < 3 {
		return result
	}

	final := "("
	start := 0
	end := n*2 - 2
	for ; start < end; start += 2 {
		final += "()"
	}
	final += ")"

	result = append(result, final)
	return result
}

func fillGapLeftRight(result *[]string, total_length, start_at, open_length int) {

	if start_at+open_length*2 > total_length {
		return
	}

	temp := ""
	current_i := 0
	// left loop
	for ; current_i < start_at; current_i += 2 {
		temp += "()"
	}

	// main loop
	end := current_i + open_length*2
	switch_index := current_i + open_length
	sym := "("
	for ; current_i < end; current_i++ {
		if current_i == switch_index {
			sym = ")"
		}
		temp += sym
	}
	// fmt.Println("start_at", start_at)
	// fmt.Println("open_length", open_length)
	// fmt.Println("start_at+open_length*2", start_at+open_length*2)

	// right loop
	for ; current_i < total_length; current_i += 2 {
		temp += "()"
	}

	*result = append(*result, temp)

	if open_length == 1 {
		return
	}
	fillGapLeftRight(result, total_length, start_at+2, open_length)
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
