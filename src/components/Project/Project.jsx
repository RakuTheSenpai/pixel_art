import React, { Component } from "react";
import "./Project.css";
import "../common.css";
import Grid from "../grid/grid";
import SideBar from "../sideBar/sideBar";
import NavBar from "../NavBar/navbar";

class Project extends Component {
  state = {
    pixels: Array.from(
      Array(this.props.ProjectData.alto * this.props.ProjectData.ancho),
      (x, index) => {
        return {
          color: { r: "255", g: "255", b: "255", a: "1" },
          id: index,
          transparency: "default-background"
        };
      }
    ),
    height: this.props.ProjectData.alto * 10,
    width: this.props.ProjectData.ancho * 10,
    numpixels: this.props.ProjectData.alto * this.props.ProjectData.ancho,
    color: { r: "0", g: "0", b: "0", a: "1" },
    selectedTool: 1
  };
  handleGlobalColorChange = color => {
    this.setState({ color: color });
  };
  handlePixelColorChange = pixel => {
    console.log(this.state.selectedTool);
    if (this.state.selectedTool === 1) {
      const pixels = [...this.state.pixels]; //... Clones array
      const index = pixels.indexOf(pixel);
      pixels[index] = { ...pixel };
      pixels[index].color = this.state.color;
      pixels[index].transparency = "";
      this.setState({ pixels });
    } else if (this.state.selectedTool === 2) {
      const pixels = [...this.state.pixels]; //... Clones array
      const index = pixels.indexOf(pixel);
      pixels[index] = { ...pixel };
      pixels[index].transparency = "default-background";
      this.setState({ pixels });
    }
  };

  handleSelectedTool = tool => {
    if (tool === 1) {
      this.setState({ selectedTool: 1 });
    } else if (tool === 2) {
      this.setState({ selectedTool: 2 });
    }
  };

  render() {
    const { height, width, pixels, color } = this.state;
    return (
      <div className="project-container">
        <NavBar nombre={this.props.ProjectData.nombre} />
        <div className="row no-gutters">
          <div className="col-1">
            <SideBar
              color={color}
              onGlobalColorChange={this.handleGlobalColorChange}
              onSelectedTool={this.handleSelectedTool}
            ></SideBar>
          </div>
          <div className="col-11 grid-container">
            <Grid
              gridHeight={height}
              gridWidth={width}
              pixels={pixels}
              onPixelColorChange={this.handlePixelColorChange}
            ></Grid>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
