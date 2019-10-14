import React, { Component } from 'react';

class ProjectSettings extends Component {
    state = {}
    render() {
        return (<div>
            <h1>Configuracion de Nuevo Proyecto</h1>

            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Nombre del Proyecto</span>
                </div>
                <input type="text" class="form-control " placeholder="Nombre" aria-label="Username" aria-describedby="basic-addon1" />
            </div>

            <button
                className="btn btn-primary btn-sm m-2">
                Crear Proyecto
            </button>
        </div>);
    }
}

export default ProjectSettings;