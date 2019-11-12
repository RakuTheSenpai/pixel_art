import React, { Component } from "react";
import "./ProjectSettings.css";
import "../common.css";

const MAX_VALUE = 64;
const MIN_VALUE = 8;
class ProjectSettings extends Component {
  state = {
    nombre: "",
    alto: 8,
    ancho: 8,
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

  hasStateChanged() {
    return this.state.ancho !== 0 && this.state.alto !== 0;
  }
  isHeightValid() {
    return this.isInRange(this.state.alto);
  }
  isWidthtValid() {
    return this.isInRange(this.state.ancho);
  }
  isInRange(value) {
    return value >= MIN_VALUE && value <= MAX_VALUE;
  }

  checkValidInputs = currentValues => {
    if (
      currentValues.nombre !== "" &&
      currentValues.ancho !== 0 &&
      currentValues.alto !== 0
    ) {
      if (
        this.isInRange(currentValues.ancho) &&
        this.isInRange(currentValues.alto)
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
                autoFocus
              />
            </div>

            <div className=" no-gutter input-group mb-3">
              <div className="input-group-prepend col-5 px-0">
                <span className="input-group-text w-100" id="basic-addon1">
                  Altura
                </span>
              </div>
              <input
                type="number"
                className="form-control col-7 "
                placeholder={"Pixeles entre " + MIN_VALUE + " y " + MAX_VALUE}
                onInput={this.handleChangeOfHeight}
                aria-label="Username"
                aria-describedby="basic-addon1"
                min={MIN_VALUE.toString()}
                max={MAX_VALUE.toString()}
                required
                defaultValue={this.state.alto}
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
                placeholder={"Pixeles entre " + MIN_VALUE + " y " + MAX_VALUE}
                onInput={this.handleChangeOfWidth}
                // onInvalid={}
                aria-label="Username"
                aria-describedby="basic-addon1"
                min={MIN_VALUE.toString()}
                max={MAX_VALUE.toString()}
                required
                defaultValue={this.state.ancho}
              />
            </div>
            <div
              className={
                "text-danger " +
                (this.isHeightValid() && this.isWidthtValid() ? "d-none" : "")
              }
            >
              Por favor ingrese valores entre {MIN_VALUE} y {MAX_VALUE} para
              Altura y Ancho.
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
