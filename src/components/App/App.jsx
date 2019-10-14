import React, { Component } from 'react';
import "./App.css"
import Menu from "../Menu/Menu"
import ProjectSettings from "../ProjectSettings/ProjectSettings"

class App extends Component {
    state = {
        LoadedComponent: 1
    }
    render() {
        return (<div>
            {this.renderComponent()}
        </div>);
    }


    renderComponent() {
        if (this.state.LoadedComponent === 1) {
            return <Menu
                LoadedComponent={this.state.LoadedComponent}
                onMoveToProjectSettingsView={this.handleMoveToProjectSettingsView} />

        } else if (this.state.LoadedComponent === 2) {
            return <ProjectSettings />
        }
    }

    handleMoveToProjectSettingsView = (LoadedComponent) => {
        console.log("Hi");
        this.setState({ LoadedComponent: 2 })
    }
}

export default App;