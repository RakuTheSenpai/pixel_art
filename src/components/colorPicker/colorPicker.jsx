import React from "react";
import reactCSS from "reactcss";
import { SketchPicker } from "react-color";

class ColorPicker extends React.Component {
  state = {
    displayColorPicker: false
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  handleChange = color => {
    this.props.onGlobalColorChange(color.rgb);
  };

  render() {
    const { color } = this.props;
    const styles = reactCSS({
      default: {
        color: {
          width: "100%",
          height: "100%",
          borderRadius: "2px",
          background: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
          paddingTop: "100%"
        },
        swatch: {
          padding: "5px",
          background: "#808080",
          borderRadius: "1px",
          boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
          cursor: "pointer",
          width: "100%",
          minWidth: "32px",
          minHeight: "32px"
        },
        popover: {
          position: "absolute",
          zIndex: "10",
          background: "#808080"
        },
        cover: {
          position: "fixed",
          top: "0px",
          right: "0px",
          bottom: "0px",
          left: "0px"
        }
      }
    });

    return (
      <div style={{ height: "80%", width: "80%" }}>
        <div style={styles.swatch} onClick={this.handleClick}>
          <div style={styles.color} />
        </div>
        {this.state.displayColorPicker ? (
          <div style={styles.popover}>
            <div style={styles.cover} onClick={this.handleClose} />
            <SketchPicker color={color} onChange={this.handleChange} />
          </div>
        ) : null}
      </div>
    );
  }
}

export default ColorPicker;
