const express = require('express')
const app = express()
const port = 3001

app.use(express.static("client"))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})