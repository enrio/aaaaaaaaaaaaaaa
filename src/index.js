import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { InputNumber, Input, Checkbox } from "antd";

function onChange(value) {
  console.log("changed", value);
}

ReactDOM.render(
  <>
    <Input.Group>
      <span style={{ width: "28px", height: "28px" }}>
        <Checkbox />
      </span>
      <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
      <span style={{ width: "28px", height: "28px" }}>
        <Checkbox />
      </span>
      <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
    </Input.Group>
  </>,
  document.getElementById("container")
);
