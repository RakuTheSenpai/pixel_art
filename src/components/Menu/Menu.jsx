import React, { Component } from "react";
import "./Menu.css";

class Menu extends Component {
  state = {};
  render() {
    return (
      <div className="menu">
        <div className="menu-button-container">
          <button
            onClick={() =>
              this.props.onMoveToProjectSettingsView(this.props.LoadedComponent)
            }
            className="btn btn-primary btn-lg menu-button"
          >
            Nuevo Proyecto
          </button>
        </div>
        <br></br>
        <div className="menu-button-container">
          <button className="btn btn-primary btn-lg menu-button">
            Abrir Proyecto
          </button>
        </div>
      </div>
    );
  }
}

export default Menu;
