import React, { Component } from "react";
import "./Menu.css";
import "../common.css";

class Menu extends Component {
  state = {};
  render() {
    return (
      <div className="center menu">
        <div className="menu-button-container">
          <button
            onClick={() =>
              this.props.onMoveToProjectSettingsView(this.props.LoadedComponent)
            }
            className="btn btn-secondary btn-lg menu-button"
          >
            Nuevo Proyecto
          </button>
        </div>
        <br></br>
        <div className="menu-button-container">
          <button
            onClick={() => this.props.onOpenProject(this.props.LoadedComponent)}
            type="file"
            className="btn btn-secondary btn-lg menu-button"
          >
            Abrir Proyecto
          </button>

          <input type="file" id="FileInput" ref="FileInput" onChange={this.props.onChange} hidden></input>

        </div>
      </div>
    );
  }
}



export default Menu;
