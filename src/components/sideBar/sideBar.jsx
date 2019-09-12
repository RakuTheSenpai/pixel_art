import React, { Component } from "react";
import ColorPicker from "../colorPicker/colorPicker";

import "./sideBar.css";
class SideBar extends Component {
  state = {};
  render() {
    const { onGlobalColorChange, color } = this.props;
    return (
      <div className="sideBar">
        <div className="row" style={{ height: "20%" }}>
          <div className="col-6">
            <ColorPicker
              onGlobalColorChange={onGlobalColorChange}
              color={color}
            ></ColorPicker>
          </div>
        </div>
      </div>
    );
  }
}

export default SideBar;
