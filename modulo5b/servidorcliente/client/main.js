import React, {Component} from "react"
import ReactDOM from "react-dom"
import {Contenedor} from "./contenedor.js"

window.onload=function() {

    let contenedor = <Contenedor/>        
    var root = ReactDOM.createRoot(document.getElementById("zona"))
    root.render(contenedor)

}