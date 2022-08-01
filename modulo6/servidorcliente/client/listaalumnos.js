import React ,{Component} from "react"
import axios from "axios"
import {FilaAlumno} from "./filaalumno";

export class ListaAlumnos extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        alumnos: []
      }
      this.borrar = this.borrar.bind(this);
    }
    componentDidMount() {

      

    }
    borrar(alumno) {
     
      this.props.onBorrar(alumno);
    }

    render() {

      return <table>
        <tbody>
          {this.props.alumnos.map((alumno) => <FilaAlumno key={alumno.nombre} onBorrar={this.borrar} alumno={alumno} />)}
        </tbody>
      </table>

    }
  }