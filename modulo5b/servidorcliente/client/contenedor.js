import React, { Component } from "react"
import axios from "axios"
import { ListaAlumnos } from "./listaalumnos.js"
import { FormularioAlumno } from "./formularioalumno.js"

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
    axios.get("http://localhost:3000/alumnos").then((datos) => {
      console.log(datos);
      this.setState({
        alumnos: datos.data
      });
    });
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
  }

  render() {
    return <div>
    <ListaAlumnos alumnos={this.state.alumnos} onBorrar={this.borrar}/>
    <FormularioAlumno onInsertar={this.insertar}/>
    </div>
  }
}