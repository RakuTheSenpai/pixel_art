import React, { Component } from 'react';
import "./App.css"

import Menu from "../Menu/Menu"
import ProjectSettings from "../ProjectSettings/ProjectSettings"
import Project from "../Project/Project"

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
            return <ProjectSettings
                LoadedComponent={this.state.LoadedComponent}
                onMoveToProject={this.handleMoveToProject} />
        } else if (this.state.LoadedComponent === 3) {
            return <Project />
        }
    }

    handleMoveToProjectSettingsView = (LoadedComponent) => {
        console.log("Hi");
        this.setState({ LoadedComponent: 2 })
    }

    handleMoveToProject = (LoadedComponent) => {
        console.log("Hello");
        this.setState({ LoadedComponent: 3 })
    }
}

export default App;