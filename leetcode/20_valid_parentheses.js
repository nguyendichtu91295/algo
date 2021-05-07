// https://leetcode.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    const stack = [];

    const popValues = {
        ']': '[',
        '}': '{',
        ')': '('
    }

    for (let i = 0; i < s.length; i++) {
        if (popValues[s[i]]) {

            if (stack[stack.length - 1] != popValues[s[i]]) {
                return false;
            } else {
                stack.pop();
                continue;
            }
        }

        stack.push(s[i]);
    }
    
    if (stack.length) {
        return false;
    }
     
    return true;
};

