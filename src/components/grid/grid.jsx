import React, { Component } from "react";
import Pixel from "../pixel/pixel";
import "./grid.css";
import "../common.css";
class Grid extends Component {
  createPixel = (
    pixel,
    onPixelColorChange,
    onPixelMouseDown,
    onPixelMouseUp
  ) => {
    return (
      <Pixel
        key={pixel.id}
        color={pixel.color}
        onPixelColorChange={onPixelColorChange}
        onPixelMouseDown={onPixelMouseDown}
        onPixelMouseUp={onPixelMouseUp}
        pixel={pixel}
      ></Pixel>
    );
  };
  render() {
    const {
      gridWidth,
      gridHeight,
      pixels,
      onPixelColorChange,
      onPixelMouseDown,
      onPixelMouseUp
    } = this.props;
    return (
      <div
        className="grid center"
        style={{
          width: gridWidth,
          height: gridHeight
        }}
        draggable={false}
      >
        {pixels.map(pixel =>
          this.createPixel(
            pixel,
            onPixelColorChange,
            onPixelMouseDown,
            onPixelMouseUp
          )
        )}
      </div>
    );
  }
}
export default Grid;
