import React, { Component } from "react";
import "./ProjectSettings.css";
import "../common.css";

class ProjectSettings extends Component {
  state = {};
  render() {
    return (
      <div className="center settings">
        <h1 className="settings-title">Configuracion de Nuevo Proyecto</h1>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              Nombre del Proyecto
            </span>
          </div>
          <input
            type="text"
            className="form-control "
            placeholder="Nombre"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              Alto
            </span>
          </div>
          <input
            type="number"
            className="form-control "
            placeholder="8"
            aria-label="Username"
            aria-describedby="basic-addon1"
            min="8"
            max="128"
          />
        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              Ancho
            </span>
          </div>
          <input
            type="number"
            className="form-control "
            placeholder="8"
            aria-label="Username"
            aria-describedby="basic-addon1"
            min="8"
            max="128"
          />
        </div>

        <button
          className="btn btn-primary btn-sm m-2"
          onClick={() => this.props.onMoveToProject(this.props.LoadedComponent)}
        >
          Crear Proyecto
        </button>
      </div>
    );
  }
}

export default ProjectSettings;
