import React, { Component } from "react";
import "./ProjectSettings.css";
import "../common.css";

class ProjectSettings extends Component {
  state = {};
  render() {
    return (
      <div className="center w-100">
        <h1 className="settings-title">Configuracion de Nuevo Proyecto</h1>
        <div className="settings settings-stripe p-4">
          <div className="settings-input">
            <div className="input-group mb-3">
              <div className="input-group-prepend col-5 px-0">
                <span className="input-group-text w-100" id="basic-addon1">
                  Nombre del Proyecto
                </span>
              </div>
              <input
                type="text"
                className="form-control col-7"
                placeholder="Nombre"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>

            <div className=" no-gutter input-group mb-3">
              <div className="input-group-prepend col-5 px-0">
                <span className="input-group-text w-100" id="basic-addon1">
                  Alto
                </span>
              </div>
              <input
                type="number"
                className="form-control col-7 "
                placeholder="8"
                aria-label="Username"
                aria-describedby="basic-addon1"
                min="8"
                max="128"
              />
            </div>

            <div className="input-group mb-3">
              <div className="input-group-prepend col-5 px-0">
                <span className="input-group-text w-100" id="basic-addon1">
                  Ancho
                </span>
              </div>
              <input
                type="number"
                className="form-control col-7"
                placeholder="8"
                aria-label="Username"
                aria-describedby="basic-addon1"
                min="8"
                max="128"
              />
            </div>

            <button
              className="btn btn-primary btn-sm m-2"
              onClick={() =>
                this.props.onMoveToProject(this.props.LoadedComponent)
              }
            >
              Crear Proyecto
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectSettings;
