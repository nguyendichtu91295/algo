// https://leetcode.com/problems/asteroid-collision/

const asteroidCollision = (asteroids) => {
    const path = []

    for (let i = 0; i < asteroids.length; i++) {
        const element = asteroids[i]

        if (!path.length) {
            path.push(element)
            continue
        }

        if (element < 0) {
            const size = Math.abs(element)
            let isExploded = false

            while (path[path.length - 1] > 0 && path.length) {
                if (size > path[path.length - 1]) {
                    path.pop()
                } else if (size === path[path.length - 1]) {
                    isExploded = true
                    path.pop()
                    break
                } else {
                    isExploded = true
                    break
                }
            }

            if (!isExploded) {
                path.push(element)
            }
        } else {
            path.push(element)
        }
    }

    return path
}

const run = () => {
    const result = asteroidCollision([5, 10, -5])

    console.log(result)
}

export default run
