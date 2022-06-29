const express = require('express')
const path = require('path')

const app = express()
const port = 3000

app.use((req, res, next) => {
    const requestedFile = req.url

	// add js extension to all leetcode folder
	if (requestedFile.indexOf("leetcode") !== -1 && requestedFile.indexOf(".js") === -1) {
		req.url = `${requestedFile  }.js`
	} else if (requestedFile.indexOf("utils") !== -1 && requestedFile.indexOf(".js") === -1) {
		req.url = `${requestedFile  }.js`
	}

    express.static(path.join(__dirname, 'js_algo'))(req, res, next)
})

app.get('/', (req, res) => {
    res.sendFile('js_algo/index.html')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
