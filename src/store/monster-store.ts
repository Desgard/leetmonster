import { observable, action } from "mobx";
import { createContext } from "react";
import { browser } from "webextension-polyfill-ts";

export class MonsterStore {
  @observable html: HTMLElement | null = null;

  constructor() {}

  @action.bound
  updateHtml(html: HTMLElement) {
    this.html = html;
  }
}

const monsterStore = new MonsterStore();
export { monsterStore };
export default createContext(monsterStore);
