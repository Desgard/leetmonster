import React from "react";
import { observer } from "mobx-react-lite";
import "./styles.scss";

type ButtonProps = {
  handler: { (): void };
  tot: number;
};

export const TestCaseButton: React.SFC<ButtonProps> = observer(props => {
  const [counter, setCounter] = React.useState<number>(1);
  return (
    <button
      className="btn btn-info case-button"
      onClick={() => {
        props.handler();
        setCounter((counter % props.tot) + 1);
      }}
    >
      <span>用例 {counter}</span>
    </button>
  );
});
