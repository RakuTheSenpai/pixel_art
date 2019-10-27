import React, { Component } from "react";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <p className="navbar-brand">{this.props.nombre}</p>
        <div className="btn-group" data-toggle="buttons">
          <button
            className="btn btn-primary m-1 disabled"
            title="Mis creadores aun no me dan funcionalidad :("
          >
            Guardar
          </button>
          <button
            className="btn btn-primary m-1 disabled"
            title="Mis creadores aun no me dan funcionalidad :("
          >
            Exportar
          </button>
        </div>
      </nav>
    );
  }
}

export default NavBar;
