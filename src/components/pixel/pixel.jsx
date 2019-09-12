import React, { Component } from "react";
import "./pixel.css";

class Pixel extends Component {
  render() {
    const { pixel, onPixelColorChange } = this.props;
    return (
      <div
        className="pixel"
        style={{
          backgroundColor:
            "rgb(" +
            pixel.color.r +
            ", " +
            pixel.color.g +
            ", " +
            pixel.color.b +
            ")"
        }}
        onClick={() => onPixelColorChange(this.props.pixel)}
      ></div>
    );
  }
}

export default Pixel;
