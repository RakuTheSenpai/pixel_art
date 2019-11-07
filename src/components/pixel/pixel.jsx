import React, { Component } from "react";
import "./pixel.css";

class Pixel extends Component {
  render() {
    const {
      pixel,
      onPixelColorChange,
      onPixelMouseUp,
      onPixelMouseDown
    } = this.props;
    return (
      <div
        className={"pixel " + pixel.transparency}
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
        draggable={false}
        onMouseOver={() => onPixelColorChange(this.props.pixel)}
        onMouseUp={() => onPixelMouseUp()}
        onMouseDown={() => onPixelMouseDown(this.props.pixel)}
      />
    );
  }
}

export default Pixel;
