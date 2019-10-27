import React, { Component } from "react";
import ColorPicker from "../colorPicker/colorPicker";

import "./sideBar.css";
class SideBar extends Component {
  state = {
    selectedTool: 0
  };
  changeTool = id => {
    this.setState({ selectedTool: id });
  };
  render() {
    const { onGlobalColorChange, color } = this.props;
    return (
      <div className="sideBar" align="center">
        <div
          className="row justify-content-center"
          style={{
            width: "100%"
          }}
        >
          <div className="col p-0">
            <ColorPicker
              onGlobalColorChange={onGlobalColorChange}
              color={color}
            ></ColorPicker>
          </div>
        </div>
        <div className="row-2 mt-2" role="group" align="center">
          <div
            className="btn-group-vertical btn-group-toggle"
            data-toggle="buttons"
          >
            <label
              className={
                "btn btn-secondary p-1 " +
                (this.state.selectedTool === 0 ? "active" : "")
              }
              title="Brocha"
            >
              <input
                type="radio"
                name="options"
                id="brocha"
                // autocomplete="off"
                checked={this.state.selectedTool === 0}
                onChange={this.changeTool.bind(this, 0)}
                onClick={() => this.props.onSelectedTool(1)}
              />{" "}
              <span className="icono icono-brocha"></span>
            </label>
            <label
              className={
                "btn btn-secondary p-1 " +
                (this.state.selectedTool === 1 ? "active" : "")
              }
              title="Borrador"
            >
              <input
                type="radio"
                name="options"
                id="borrador"
                checked={this.state.selectedTool === 1}
                onChange={this.changeTool.bind(this, 1)}
                onClick={() => this.props.onSelectedTool(2)}
              />{" "}
              <span className="icono icono-borrador"></span>
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default SideBar;
