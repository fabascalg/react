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
<<<<<<< HEAD
app.delete("/Alumnos",(req,res)=>{
  let seleccionado = alumnos.filter(function(elemento){
    return elemento.nombre == req.params.nombre
  })[0];
  let indice = alumnos.indexOf(seleccionado)
  alumnos.splice(indice,1)
  res.status(204).send()
})
=======
// borrado
app.delete("/alumnos/:nombre", (req,res){
  // localizar <<nombre>>
  let seleccionado= alumnos.filter(function(elemento){
    return elemento.nombre == req.params.nombre;
  })
  // localizar el índice del encontrado
  let indice = alumnos.indexOf(seleccionado);
  alumnos.splice(indice,1);
  res.status(204).send();
})
//
>>>>>>> c45d8b038dc1773c0a5a1c95a5a1b4f88e3fecae
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})