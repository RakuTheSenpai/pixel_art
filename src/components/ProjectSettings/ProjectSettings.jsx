import React, { Component } from 'react';

class ProjectSettings extends Component {
    state = {
        nombre: "",
        alto: 0,
        ancho: 0,
        allFieldsCorrect: false
    }

    handleChangeOfName = (e) => {
        this.setState({ nombre: e.target.value });
        this.checkValidInputs(
            {
                nombre: e.target.value,
                alto: this.state.alto,
                ancho: this.state.ancho
            }
        );
    }

    handleChangeOfHeight = (e) => {
        this.setState({ alto: e.target.value });
        this.checkValidInputs(
            {
                nombre: this.state.nombre,
                alto: e.target.value,
                ancho: this.state.ancho
            }
        );
    }

    handleChangeOfWidth = (e) => {
        this.setState({ ancho: e.target.value });
        this.checkValidInputs(
            {
                nombre: this.state.nombre,
                alto: this.state.alto,
                ancho: e.target.value
            }
        );

    }

    checkValidInputs = (currentValues) => {

        if (currentValues.nombre !== "" && currentValues.ancho !== 0 && currentValues.alto !== 0) {

            if (currentValues.alto >= 8 && currentValues.alto <= 128 &&
                currentValues.ancho >= 8 && currentValues.ancho <= 128) {

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


    }


    render() {
        return (<div>
            <h1>Configuracion de Nuevo Proyecto</h1>


            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text"
                        id="basic-addon1">Nombre del Proyecto</span>
                </div>
                <input type="text"
                    className="form-control"
                    placeholder="Nombre del Proyecto"
                    onChange={this.handleChangeOfName}
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    required />
            </div>

            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text"
                        id="basic-addon1">Alto</span>
                </div>
                <input type="number"
                    className="form-control"
                    placeholder="Alto"
                    onChange={this.handleChangeOfHeight}
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    required />
            </div>

            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text"
                        id="basic-addon1">Ancho</span>
                </div>
                <input type="number"
                    className="form-control"
                    placeholder="Ancho"
                    onChange={this.handleChangeOfWidth}
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    required />
            </div>

            <button
                className="btn btn-primary btn-sm m-2"
                disabled={!this.state.allFieldsCorrect}
                onClick={() => this.props.onMoveToProject(this.props.LoadedComponent)}>
                Crear Proyecto
                </button>



        </div>);
    }


}





export default ProjectSettings;