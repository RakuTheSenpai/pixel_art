import React, { Component } from "react";
import "./Project.css";
import Grid from "../grid/grid";
import SideBar from "../sideBar/sideBar";
import { thisExpression } from "@babel/types";

class Project extends Component {
  state = {
    pixels: Array.from(Array(1600), (x, index) => {
      return { color: { r: "255", g: "255", b: "255", a: "1" }, id: index };
    }),
    height: 400,
    width: 400,
    numpixels: 1600,
    color: { r: "241", g: "112", b: "19", a: "1" }
  };
  handleGlobalColorChange = color => {
    this.setState({ color: color });
  };
  handlePixelColorChange = pixel => {
    const pixels = [...this.state.pixels]; //... Clones array
    const index = pixels.indexOf(pixel);
    pixels[index] = { ...pixel };
    pixels[index].color = this.state.color;
    this.setState({ pixels });
  };
  render() {
    const { height, width, pixels, color } = this.state;
    return (
      <div className="project-background">
        <div className="row">
          <div className="col-2">
            <SideBar
              color={color}
              onGlobalColorChange={this.handleGlobalColorChange}
            ></SideBar>
          </div>
          <div className="col-4">
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
