import React, { Component } from "react"
import ReactDOM from "react-dom/client"
import {ListaAlumnnos} from "./listaalumno.js"
import {FormularioAlumno} from "./formularioalumno.js"

let tabla = <div><ListaAlumnnos /><FormularioAlumno /></div>
var root = ReactDOM.createRoot(document.getElementById("zona"))
root.render(tabla)