import React, { FunctionComponent } from "react";
import "./styles.scss";
import { executeScript } from "@src/utils/execute-script";

const commands = [
  {
    name: "Copy Test Case",
    script: `alert("hello leetcode")`,
  },
];

export const Scripter: FunctionComponent = () => {
  return (
    <div className="row">
      <div className="col-lg-12">
        {commands.map(info => (
          <button
            className="btn btn-block btn-outline-dark"
            onClick={(): void => executeScript(info.script)}
            key={`Scripter-${info.name}`}
          >
            {info.name}
          </button>
        ))}
      </div>
    </div>
  );
};
