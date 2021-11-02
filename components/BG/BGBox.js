import React from "react";
import BackdropSlit from "./BackdropSlit";

const BGBox = () => {
  return (
    <div className="BGBox">
      {Array(150).fill(<BackdropSlit />)}
    </div>
  );
};

export default BGBox;
