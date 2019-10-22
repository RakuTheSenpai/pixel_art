import React, { Component } from "react";
import "./pixel.css";

class Pixel extends Component {



  render() {
    const { pixel, onPixelColorChange } = this.props;
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
            ")",

        }
        }
        onClick={() => onPixelColorChange(this.props.pixel)
        }
      ></div >
    );
  }
}

export default Pixel;
