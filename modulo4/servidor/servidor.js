const express = require('express')
const app = express()
const port = 3000
// activar CORS cross origin request sharing
var cors = require('cors')
app.use(cors())
// creamos una lista de alumnos
let alumnos=[];
alumnos.push({"nombre":"pepe",nota:5},{"nombre":"ana",nota:7});
// configuramos una url para devolver la lista de alumnos
app.get("/alumnos", (req,res) => {
  res.send(alumnos)
} )

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})