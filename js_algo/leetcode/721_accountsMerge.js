// https://leetcode.com/problems/accounts-merge/

const accountsMerge = (accounts) => {}

const run = () => {
    const result = accountsMerge([
        ['John', 'johnsmith@mail.com', 'john_newyork@mail.com'],
        ['John', 'john00@mail.com', 'johnsmith@mail.com'],
        ['Mary', 'mary@mail.com'],
        ['John', 'johnnybravo@mail.com']
    ]) /**
     * [
            'John',
            'john00@mail.com',
            'john_newyork@mail.com',
            'johnsmith@mail.com'
        ],
        ['Mary', 'mary@mail.com'],
        ['John', 'johnnybravo@mail.com']
    ]
     */

    console.log(result)
}

export default run


/*
[
    {
        name: "John",
        emails: {
            "johnsmith@mail.com": 1,
            "john_newyork@mail.com": 1,
            "john00@mail.com": 1
        }
    }
]

isDuplicate = True
["john00@mail.com", "johnsmith@mail.com"]
index = 0

if isDuplicate {

}

*/
