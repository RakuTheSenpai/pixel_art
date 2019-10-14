import React, { Component } from 'react';

class Menu extends Component {
    state = {}
    render() {
        return (<div>
            <button
                onClick={() => this.props.onMoveToProjectSettingsView(this.props.LoadedComponent)}
                className="btn btn-primary btn-sm m-2">
                Nuevo Proyecto
            </button>

            <br></br>
            <button className="btn btn-primary btn-sm m-2">Abrir Proyecto</button>
        </div>);
    }
}

export default Menu;