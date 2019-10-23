import React, { Component } from "react";
import "./ProjectSettings.css";
import "../common.css";

class ProjectSettings extends Component {
  state = {
    nombre: "",
    alto: 0,
    ancho: 0,
    allFieldsCorrect: false
  };

  handleChangeOfName = e => {
    this.setState({ nombre: e.target.value });
    this.checkValidInputs({
      nombre: e.target.value,
      alto: this.state.alto,
      ancho: this.state.ancho
    });
  };

  handleChangeOfHeight = e => {
    this.setState({ alto: e.target.value });
    this.checkValidInputs({
      nombre: this.state.nombre,
      alto: e.target.value,
      ancho: this.state.ancho
    });
  };

  handleChangeOfWidth = e => {
    this.setState({ ancho: e.target.value });
    this.checkValidInputs({
      nombre: this.state.nombre,
      alto: this.state.alto,
      ancho: e.target.value
    });
  };

  checkValidInputs = currentValues => {
    if (
      currentValues.nombre !== "" &&
      currentValues.ancho !== 0 &&
      currentValues.alto !== 0
    ) {
      if (
        currentValues.alto >= 8 &&
        currentValues.alto <= 128 &&
        currentValues.ancho >= 8 &&
        currentValues.ancho <= 128
      ) {
        this.setState({ allFieldsCorrect: true });

        //
        // En caso de implementar un boton hacia atras, se tendra que cambiar esta parte.
        //

        const copy = {
          nombre: currentValues.nombre,
          alto: currentValues.alto,
          ancho: currentValues.ancho
        };

        this.props.updateProjectData(copy);

        //
      } else {
        this.setState({ allFieldsCorrect: false });
      }
    } else {
      this.setState({ allFieldsCorrect: false });
    }
  };

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
                placeholder="Nombre del Proyecto"
                onChange={this.handleChangeOfName}
                aria-label="Username"
                aria-describedby="basic-addon1"
                required
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
                placeholder="Alto"
                onChange={this.handleChangeOfHeight}
                aria-label="Username"
                aria-describedby="basic-addon1"
                min="8"
                max="128"
                required
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
                placeholder="Ancho"
                onChange={this.handleChangeOfWidth}
                aria-label="Username"
                aria-describedby="basic-addon1"
                min="8"
                max="128"
                required
              />
            </div>

            <button
              className="btn btn-secondary btn-sm m-2"
              disabled={!this.state.allFieldsCorrect}
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
