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
          color: { r: "0", g: "0", b: "0", a: "0" },
          id: index,
          transparency: "default-background"
        };
      }
    ),
    height: this.props.ProjectData.alto * 10,
    width: this.props.ProjectData.ancho * 10,
    numpixels: this.props.ProjectData.alto * this.props.ProjectData.ancho,
    color: { r: "0", g: "0", b: "0", a: "1" },
    selectedTool: 1,
    pixelClicked: false
  };
  handleGlobalColorChange = color => {
    this.setState({ color: color });
  };
  handlePixelMouseDown = pixel => {
    this.setState({ pixelClicked: true });
    this.handlePixelColorChange(pixel, true);
  };
  handlePixelMouseUp = () => {
    this.setState({ pixelClicked: false });
  };
  handleGridMouseOut = () => {
    this.setState({ pixelClicked: false });
  };
  handlePixelColorChange = (pixel, pass) => {
    if (this.state.pixelClicked || pass !== undefined) {
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
        // Para que no aparesca el pixel eliminado al exportarlo
        pixels[index].color = { r: "0", g: "0", b: "0", a: "0" }
        //
        pixels[index].transparency = "default-background";
        this.setState({ pixels });
      }
    }
  };

  handleSelectedTool = tool => {
    if (tool === 1) {
      this.setState({ selectedTool: 1 });
    } else if (tool === 2) {
      this.setState({ selectedTool: 2 });
    }
  };


  handleExportImage = () => {

    var temp_canvas = document.createElement("canvas");
    temp_canvas.width = this.props.ProjectData.ancho;
    temp_canvas.height = this.props.ProjectData.alto;

    var myContext = temp_canvas.getContext("2d");

    const ImageData = myContext.createImageData(this.props.ProjectData.ancho, this.props.ProjectData.alto);

    for (var i = 0; i < this.props.ProjectData.alto * this.props.ProjectData.ancho; i++) {

      const pixel = this.state.pixels[i];
      console.log(pixel.color);
      ImageData.data[4 * i + 0] = pixel.color.r;
      ImageData.data[4 * i + 1] = pixel.color.g;
      ImageData.data[4 * i + 2] = pixel.color.b;
      ImageData.data[4 * i + 3] = pixel.color.a * 255;

    }

    // console.log("JAJA", ImageData);

    myContext.putImageData(ImageData, 0, 0);

    var image = temp_canvas.toDataURL("image/png");  // here is the most important part because if you dont replace you will get a DOM 18 exception.

    const element = document.createElement("a");

    element.href = image;
    element.download = this.props.ProjectData.nombre + ".png";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();


  }


  handleSaveProject = () => {

    const ProjectData = {
      nombre: this.props.ProjectData.nombre,
      pixels: { ...this.state.pixels },
      height: this.state.height,
      width: this.state.width,
      numpixels: this.state.numpixels

    }
    console.log(JSON.stringify(ProjectData));


    const element = document.createElement("a");
    const file = new Blob([JSON.stringify(ProjectData)], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = this.props.ProjectData.nombre + ".pxart";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  }
  render() {
    const { height, width, pixels, color } = this.state;
    return (
      <div className="project-container">
        <NavBar
          nombre={this.props.ProjectData.nombre}
          onExportImage={this.handleExportImage}
          onSaveProject={this.handleSaveProject}
        />

        <div className="row no-gutters">
          <div className="col-1">
            <SideBar
              color={color}
              onGlobalColorChange={this.handleGlobalColorChange}
              onSelectedTool={this.handleSelectedTool}
            ></SideBar>
          </div>
          <div
            className="col-11 grid-container"
            onMouseLeave={() => this.handleGridMouseOut()}
            draggable={false}
          >
            <Grid
              gridHeight={height}
              gridWidth={width}
              pixels={pixels}
              onPixelColorChange={this.handlePixelColorChange}
              onPixelMouseUp={this.handlePixelMouseUp}
              onPixelMouseDown={this.handlePixelMouseDown}
            ></Grid>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
