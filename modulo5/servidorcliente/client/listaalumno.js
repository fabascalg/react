import React,{Component} from "react"
import axios from "axios"
import {FilaAlumno} from "./filaalumno.js"

export class ListaAlumnnos extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            alumnos: []
        }
        this.borrar = this.borrar.bind(this);
    }
    componentDidMount() {

        axios.get("http://localhost:3000/alumnos").then((datos) => {
            // cargo la lista de alumnos y por lo tanto
            // no me hace falta como propiedad
            console.log(datos);
            this.setState({
                alumnos: datos

            });

        });

    }
    borrar(alumno) {
        axios.delete(`http://localhost:3000/alumnos/${alumno.nombre}`).then((a) => {

            console.log(" desde la lista se ha borrado");
            // una vez hemos borrado quiero recargar la lista
            return axios.get("http://localhost:3000/alumnos");
        }).then((datos) => {
            this.setState({
                alumnos: datos
            })

        })

    }

    render() {

        return <table>
            <tbody>
                {this.state.alumnos.map((alumno) => <FilaAlumno key={alumno.nombre} onBorrar={this.borrar} alumno={alumno} />)}
            </tbody>
        </table>

    }
}