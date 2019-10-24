import React, { Component } from "react";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <p className="navbar-brand">{this.props.nombre}</p>

        <button>Guardar</button>
        <button>Exportar</button>
      </nav>
    );
  }
}

export default NavBar;
