import React, { Component } from "react";
import Pixel from "../pixel/pixel";
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
        style={{
          width: gridWidth,
          height: gridHeight,
          marginLeft: "40%",
          paddingTop: "10%"
        }}
      >
        {pixels.map(pixel => this.createPixel(pixel, onPixelColorChange))}
      </div>
    );
  }
}
export default Grid;
