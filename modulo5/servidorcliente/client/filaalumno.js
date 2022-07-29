import React,{Component} from "react"

export class FilaAlumno extends React.Component {

    constructor(props) {
        super(props);
        this.borrar = this.borrar.bind(this);
    }

    borrar() {


        console.log("desde la fila" + this.props.alumno)

        this.props.onBorrar(this.props.alumno);

    }

    render() {
        return <tr>
            <td>{this.props.alumno.nombre}</td>
            <td>{this.props.alumno.nota}</td>
            <td><input type="button" value="borrar" onClick={this.borrar} /></td>
        </tr>
    }

}