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
        <div className="row-2" role="group">
          <button
            type="button"
            onClick={() => this.props.onSelectedTool(1)}
            className="btn btn-sm btn-secondary p-1"
            title="Brocha"
          >
            <span className="icono icono-brocha"></span>
          </button>
          <button
            type="button"
            onClick={() => this.props.onSelectedTool(2)}
            className="btn btn-sm btn-secondary p-1"
            title="Borrador"
          >
            <span className="icono icono-borrador"></span>
          </button>
        </div>
      </div>
    );
  }
}

export default SideBar;
