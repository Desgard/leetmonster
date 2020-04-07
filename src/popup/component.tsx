import React, { FunctionComponent, useContext } from "react";
import { observer } from "mobx-react-lite";
import { Title } from "@src/components/title";
import { browser } from "webextension-polyfill-ts";
import { Scripter } from "@src/components/scroller";
import "./styles.scss";


export const Popup: React.FunctionComponent = () => {
  React.useEffect(() => {
    browser.runtime.sendMessage({ popupMounted: true });
  }, []);

  // const monsterStore = useContext(MonsterStore);

  return (
    <div className="popup-container">
      <div className="container mx-4 my-4">
        <Title />
        <hr />
        <Scripter />
        {/* {monsterStore.html} */}
      </div>
    </div>
  );
}
