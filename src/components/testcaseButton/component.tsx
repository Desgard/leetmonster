import React, { FunctionComponent } from "react";
import "./styles.scss";

type ButtonProps = {
  handler: () => void;
};

export const TestCaseButton: FunctionComponent<ButtonProps> = ({
  handler,
}: ButtonProps) => {
  return (
    <button
      className="btn btn-info case-button"
      onClick={(): void => handler()}
    >
      <span>用例</span>
    </button>
  );
};
