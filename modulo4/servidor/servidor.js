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

// añadir un alumno
app.post("/alumnos",(req,res)=>{
  alumnos.push(req.body)
  res.status(201).send()
})

// borrar por nombre
app.delete("/alumnos/:nombre",(req,res)=>{
  let seleccionado = alumnos.filter(function(elemento){
    return elemento.nombre == req.params.nombre
  })[0];
  let indice = alumnos.indexOf(seleccionado)
  alumnos.splice(indice,1)
  res.status(204).send()
})

app.get('/', (req, res) => {
  res.send('Servidor de Datos!!!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})