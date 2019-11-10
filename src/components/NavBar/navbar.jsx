import React, { Component } from "react";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <p className="navbar-brand">
          <u>{this.props.nombre}</u>
        </p>
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
            onClick={this.props.onExportImage}
          >
            Exportar
          </button>
        </div>
      </nav>
    );
  }
}

export default NavBar;
