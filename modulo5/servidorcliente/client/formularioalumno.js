import React, { Component } from "react"
import axios from "axios"

export class FormularioAlumno extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            nombre: "",
            nota: 0
        }
        this.actualizarNombre = this.actualizarNombre.bind(this);
        this.actualizarNota = this.actualizarNota.bind(this);
        this.insertar = this.insertar.bind(this);


    }
    // se estan lanzando desde los input de texto
    actualizarNombre(e) {

        console.log(e.target.value);
        this.setState({ nombre: e.target.value });
    }

    actualizarNota(e) {
        console.log(e.target.value);
        this.setState({ nota: e.target.value });
    }

    insertar() {

        axios.post("http://localhost:3000/alumnos", this.state).then(() => {

            return axios.get("http://localhost:3000/alumnos");

        }).then((alumnos) => {
            // todo tiene un limite
            console.log(alumnos);
        })

    }


    render() {
        return <form>
            <p>
                Nombre:<input type="text" name="nombre" value={this.state.nombre} onChange={this.actualizarNombre} />
            </p>
            <p>
                Nota:<input type="text" name="nota" value={this.state.nota} onChange={this.actualizarNota} />
            </p>
            <p>
                <input type="button" value="insertar" onClick={this.insertar} />
            </p>
        </form>

    }
}