import React, { Component } from "react";
import "./App.css";

import Menu from "../Menu/Menu";
import ProjectSettings from "../ProjectSettings/ProjectSettings";
import Project from "../Project/Project";
import OpenProject from "../OpenProject/OpenProject"
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
          id="Menu"
          ref="Menu"
          ProjectData={this.state.ProjectData}
          LoadedComponent={this.state.LoadedComponent}
          onMoveToProjectSettingsView={this.handleMoveToProjectSettingsView}
          onOpenProject={this.handleOpenProject}
          onChange={this.handleChange}
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
      return (<Project
        ProjectData={this.state.ProjectData} />);


    } else if (this.state.LoadedComponent === 4) {
      console.log("I am here too");

      return (<OpenProject
        ProjectData={this.state.ProjectData} />)

    }
  }

  handleMoveToProjectSettingsView = LoadedComponent => {
    this.setState({ LoadedComponent: 2 });
  };

  handleMoveToProject = LoadedComponent => {
    this.setState({ LoadedComponent: 3 });
  };

  //////////////////////////
  updateProjectData = data => {
    this.setState({ ProjectData: data });
  };

  handleOpenProject = LoadedComponent => {
    var input = this.refs.Menu.refs.FileInput;
    input.click();
    // console.log(input);
  }

  readAsText = (inputFile) => {
    const reader = new FileReader();

    return new Promise((resolve, reject) => {

      reader.onerror = () => {
        reader.abort();
        reject(new DOMException("Problem parsing input file"));
      };

      reader.onload = () => {
        resolve(reader.result);
      };

      reader.readAsText(inputFile);
    })
  }

  handleChange = async event => {

    let file = event.target.files[0]


    try {
      // console.log("Hola");
      const TextFile = await this.readAsText(file);
      // console.log(TextFile);

      var Data = JSON.parse(TextFile);
      // console.log(Data);

      if (!Data.hasOwnProperty("nombre") ||
        !Data.hasOwnProperty("height") ||
        !Data.hasOwnProperty("width") ||
        !Data.hasOwnProperty("numpixels") ||
        !Data.hasOwnProperty("pixels")) {

        throw { message: "Formato del archivo de entrada incorrecto" };

      } else {

        this.setState({ ProjectData: { nombre: Data.nombre } });
        this.setState({ ProjectData: { alto: Data.height } });
        this.setState({ ProjectData: { ancho: Data.width } });
        this.setState({ ProjectData: { numpixels: Data.numpixels } });

        var px = Object.keys(Data.pixels).map(function (key) {
          return Data.pixels[key];
        });

        // console.log(px);

        this.setState({
          ProjectData: {
            nombre: Data.nombre,
            alto: Data.height,
            ancho: Data.width,
            pixels: px,
            numpixels: Data.numpixels
          }
        });

        // console.log(Data.pixels);

        this.setState({ LoadedComponent: 4 });
      }

    } catch (e) {
      // console.warn(e.message);
      alert(e.message);
    }


  }

}

export default App;
