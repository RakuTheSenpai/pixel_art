import React, { Component } from 'react';

class NavBar extends Component {
    state = {}
    render() {
        return (<nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                {this.props.nombre}
            </a>

            <button>Guardar</button>
            <button>Exportar</button>
        </nav>
        );
    }
}

export default NavBar;
