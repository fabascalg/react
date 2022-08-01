import React ,{Component} from "react"
import axios from "axios"
export class FormularioAlumno extends React.Component {

    constructor(props) {
      super(props);
      this.state = {

        nombre: "",
        nota: 0
      }
      this.actualizarNombre=this.actualizarNombre.bind(this);
      this.actualizarNota=this.actualizarNota.bind(this);
      this.insertar=this.insertar.bind(this);
      

    }
    // se estan lanzando desde los input de texto
    actualizarNombre(e) {

     
      this.setState( {nombre:e.target.value});
    }

    actualizarNota(e) {
      this.setState( {nota:e.target.value});
    }
      
    insertar() {
     
      this.props.onInsertar(this.state);
    }
    

    render() {
      return <form>
        <p>
          Nombre:<input type="text" name="nombre" value={this.state.nombre} onChange={this.actualizarNombre} />
        </p><p>
          Nota:<input type="text" name="nota" value={this.state.nota}  onChange={this.actualizarNota}/>
        </p><p>
          <input type="button" value="insertar" onClick={this.insertar} />

        </p>
      </form>

    }
  }