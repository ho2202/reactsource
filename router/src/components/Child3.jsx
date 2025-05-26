import React, { useContext } from "react";
import Child4 from "./Child4";
import { ToggleContext } from "../contexts/ToggleContext";

const Child3 = () => {
  const { isOn } = useContext(ToggleContext);

  return (
    <div>
      <h2>Child3</h2>
      <p>Toggle {isOn ? "On" : "Off"}</p>
      <Child4 />
    </div>
  );
};

export default Child3;
