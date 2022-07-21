// https://leetcode.com/problems/course-schedule/

const canFinish = (numCourses, prerequisites) => {
    const jobs = {}
    const visited = {}

    for (let i = 0; i < numCourses; i++) {
        jobs[i] = []
    }

    prerequisites.forEach((item) => {
        const [after, before] = item

        if (!jobs[after]) {
            jobs[after] = []
        }

        jobs[after].push(before)
    })

    const dfs = (job = 0) => {
        if (visited[job]) {
            return false
        }

        visited[job] = 1

        for (let i = 0; i < jobs[job].length; i++) {
            if (!dfs(jobs[job][i])) {
                return false
            }
        }
        visited[job] = undefined

        jobs[job] = []

        return true
    }

    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) {
            return false
        }
    }

    return true
}

const run = () => {
    const result = canFinish(2, [[1, 0]])
    // const result = canFinish(1, [])
    // const result = canFinish(6, [
    //     [0, 5],
    //     [0, 4],
    //     [1, 4],
    //     [1, 3],
    //     [3, 2],
    //     [2, 5]
    // ])
    // const result = canFinish(2, [
    //     [1, 0],
    //     [0, 1]
    // ])

    console.log(result)
}

export default run
