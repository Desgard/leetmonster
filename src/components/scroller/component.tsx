import React, { FunctionComponent } from "react";
import "./styles.scss";
import { executeScript } from "@src/utils/executeScript";

// // // //

// Scripts to execute in current tab
const scrollToTopScript = `window.scroll(0,0)`;
const scrollToBottomScript = `window.scroll(0,9999999)`;

export const Scroller: FunctionComponent = () => {
  return (
    <div className="row">
      <div className="col-lg-12">
        <button
          className="btn btn-block btn-outline-dark"
          onClick={(): void => executeScript(scrollToTopScript)}
        >
          Scroll To Top
        </button>
        <button
          className="btn btn-block btn-outline-dark"
          onClick={(): void => executeScript(scrollToBottomScript)}
        >
          Scroll To Bottom
        </button>
      </div>
    </div>
  );
};
