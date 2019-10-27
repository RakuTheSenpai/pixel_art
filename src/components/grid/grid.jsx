import React, { Component } from "react";
import Pixel from "../pixel/pixel";
import "./grid.css";
import "../common.css";
class Grid extends Component {
  createPixel = (pixel, onPixelColorChange) => {
    return (
      <Pixel
        key={pixel.id}
        color={pixel.color}
        onPixelColorChange={onPixelColorChange}
        pixel={pixel}
      ></Pixel>
    );
  };
  render() {
    const { gridWidth, gridHeight, pixels, onPixelColorChange } = this.props;
    return (
      <div
        className="grid center"
        style={{
          width: gridWidth,
          height: gridHeight
        }}
      >
        {pixels.map(pixel => this.createPixel(pixel, onPixelColorChange))}
      </div>
    );
  }
}
export default Grid;
