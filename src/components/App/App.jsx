import React, { Component } from "react";
import "./App.css";

import Menu from "../Menu/Menu";
import ProjectSettings from "../ProjectSettings/ProjectSettings";
import Project from "../Project/Project";
import "../common.css";

class App extends Component {
  state = {
    LoadedComponent: 1,
    ProjectData: {}
  };
  render() {
    return (
      <div className="background">
        {this.renderComponent()}
        <p>{this.ProjectData}</p>
      </div>
    );
  }

  renderComponent() {
    if (this.state.LoadedComponent === 1) {
      return (
        <Menu
          LoadedComponent={this.state.LoadedComponent}
          onMoveToProjectSettingsView={this.handleMoveToProjectSettingsView}
        />
      );
    } else if (this.state.LoadedComponent === 2) {
      return (
        <ProjectSettings
          LoadedComponent={this.state.LoadedComponent}
          updateProjectData={this.updateProjectData}
          onMoveToProject={this.handleMoveToProject}
        />
      );
    } else if (this.state.LoadedComponent === 3) {
      return <Project ProjectData={this.state.ProjectData} />;
    }
  }

  handleMoveToProjectSettingsView = LoadedComponent => {
    console.log("Hi");
    this.setState({ LoadedComponent: 2 });
  };

  handleMoveToProject = LoadedComponent => {
    console.log("Hello");
    this.setState({ LoadedComponent: 3 });
  };

  updateProjectData = data => {
    // console.log(data);
    this.setState({ ProjectData: data });
  };
}

export default App;
