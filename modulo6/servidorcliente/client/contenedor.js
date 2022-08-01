import React, { Component } from "react"
import axios from "axios"
import { ListaAlumnos } from "./listaalumnos.js"
import { FormularioAlumno } from "./formularioalumno.js"
import { Router, Switch, Route, Link } from "react-router-dom"
import history from "./history.js"

export class Contenedor extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      alumnos: []
    }
    this.borrar = this.borrar.bind(this);
    this.insertar = this.insertar.bind(this);
  }
  componentDidMount() {
    document.getElementById("formulario").style.display = "none";
    axios.get("http://localhost:3000/alumnos").then((datos) => {
      console.log(datos);
      this.setState({
        alumnos: datos.data
      });
    });
    history.push("/lista")
  }
  borrar(alumno) {
    axios.delete(`http://localhost:3000/alumnos/${alumno.nombre}`).then((a) => {
      return axios.get("http://localhost:3000/alumnos");
    }).then((datos) => {
      this.setState({
        alumnos: datos.data
      })
    })
  }

  insertar(alumno) {
    axios.post("http://localhost:3000/alumnos", alumno).then(() => {
      return axios.get("http://localhost:3000/alumnos");
    }).then((alumnos) => {
      this.setState({
        alumnos: alumnos.data
      })
    })
    document.getElementById("formulario").style.display = "none";
    document.getElementById("listaalumnos").style.display = "block";
  }

  mostrarFormulario() {
    document.getElementById("listaalumnos").style.display = "none";
    document.getElementById("formulario").style.display = "block";
  }

  /*
  render() {
    return <div>
      <div id="listaalumnos">
        <ListaAlumnos alumnos={this.state.alumnos} onBorrar={this.borrar} />
        <input type="button" value="nuevo" onClick={this.mostrarFormulario}/>
      </div>
      <div id="formulario">
        <FormularioAlumno onInsertar={this.insertar} />
      </div>
    </div>
  }
  */
  render() {
    return <Router history={history}>
      <Switch>

        <Route path="/lista">
          <ListaAlumnos alumnos={this.state.alumnos} onBorrar={this.borrar} />
          <link to="/formulario">nuevo</link>
        </Route>
        <Route path="/formulario">
          <FormularioAlumno onInsertar={this.insertar} />
        </Route>

      </Switch>


    </Router>
  }
}